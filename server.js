#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server configuration
const SERVER_NAME = 'newsroom-extension';
const SERVER_VERSION = '3.0.0';
const SKILLS_BASE_DIR = path.join(__dirname, 'skills');

// Initialize the MCP server
const server = new Server(
  {
    name: SERVER_NAME,
    version: SERVER_VERSION,
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// In-memory cache for discovered skills
let skillsCache = null;
let skillsCacheTime = 0;
const CACHE_DURATION = 30000; // 30 seconds

/**
 * Recursively discover all .md files in the skills directory tree
 */
function discoverSkills() {
  const now = Date.now();
  if (skillsCache && (now - skillsCacheTime) < CACHE_DURATION) {
    return skillsCache;
  }

  const skills = [];

  function walkDirectory(dir) {
    if (!fs.existsSync(dir)) {
      return;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively walk subdirectories
        walkDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        // Read YAML frontmatter from markdown files
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const metadata = parseYamlFrontmatter(content);

          const relativePath = path.relative(SKILLS_BASE_DIR, fullPath);

          skills.push({
            uri: `file://${fullPath}`,
            name: metadata.name || metadata.title || path.basename(path.dirname(fullPath)),
            description: metadata.description || `Skill: ${entry.name}`,
            mimeType: 'text/markdown',
            relativePath,
          });
        } catch (error) {
          console.error(`Error reading skill file ${fullPath}:`, error);
        }
      }
    }
  }

  walkDirectory(SKILLS_BASE_DIR);
  skillsCache = skills;
  skillsCacheTime = now;

  return skills;
}

/**
 * Parse YAML frontmatter from markdown content
 */
function parseYamlFrontmatter(content) {
  const lines = content.split('\n');

  if (lines[0] !== '---') {
    return {};
  }

  let endIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      endIdx = i;
      break;
    }
  }

  if (endIdx === -1) {
    return {};
  }

  const frontmatterStr = lines.slice(1, endIdx).join('\n');

  try {
    return yaml.load(frontmatterStr) || {};
  } catch (error) {
    console.error('Error parsing YAML frontmatter:', error);
    return {};
  }
}

/**
 * Safely resolve skill paths to prevent directory traversal attacks
 */
function resolveSkillPath(skillName) {
  // Normalize the path to prevent directory traversal
  const normalizedPath = path.normalize(skillName);

  // Reject if path tries to go up directories
  if (normalizedPath.startsWith('..') || path.isAbsolute(normalizedPath)) {
    throw new Error('Invalid skill path');
  }

  const fullPath = path.join(SKILLS_BASE_DIR, normalizedPath);
  const resolvedPath = path.resolve(fullPath);

  // Ensure the resolved path is within the skills directory
  if (!resolvedPath.startsWith(path.resolve(SKILLS_BASE_DIR))) {
    throw new Error('Path traversal detected');
  }

  return resolvedPath;
}

/**
 * List resources handler
 */
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const skills = discoverSkills();

  return {
    resources: skills.map(skill => ({
      uri: skill.uri,
      name: skill.name,
      description: skill.description,
      mimeType: skill.mimeType,
    })),
  };
});

/**
 * Read resource handler
 */
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const skills = discoverSkills();

  // Find skill by URI
  const skill = skills.find(s => s.uri === request.params.uri);

  if (!skill) {
    throw new Error(`Skill not found: ${request.params.uri}`);
  }

  try {
    // Verify the path is safe
    const safeResolved = resolveSkillPath(skill.relativePath);

    const content = fs.readFileSync(safeResolved, 'utf-8');

    return {
      contents: [
        {
          uri: request.params.uri,
          mimeType: 'text/markdown',
          text: content,
        },
      ],
    };
  } catch (error) {
    throw new Error(`Failed to read skill: ${error.message}`);
  }
});

/**
 * List tools handler
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search-skills',
        description: 'Search for skills by keyword across all available newsroom skills',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query (searches titles, descriptions, and content)',
            },
          },
          required: ['query'],
        },
      },
      {
        name: 'list-skills',
        description: 'List all available newsroom skills with their names and descriptions',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get-skill',
        description: 'Load a specific skill by name and return its full content',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the skill to load',
            },
          },
          required: ['name'],
        },
      },
    ],
  };
});

/**
 * Call tool handler
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  const toolInput = request.params.arguments;

  if (toolName === 'search-skills') {
    return handleSearchSkills(toolInput);
  } else if (toolName === 'list-skills') {
    return handleListSkills();
  } else if (toolName === 'get-skill') {
    return handleGetSkill(toolInput);
  } else {
    throw new Error(`Unknown tool: ${toolName}`);
  }
});

/**
 * Search skills by keyword
 */
function handleSearchSkills(input) {
  const query = (input.query || '').toLowerCase();
  const skills = discoverSkills();

  const results = skills.filter(skill => {
    const nameMatch = skill.name.toLowerCase().includes(query);
    const descMatch = skill.description.toLowerCase().includes(query);

    // Also search file content if no match on name/description
    if (!nameMatch && !descMatch) {
      try {
        const safeResolved = resolveSkillPath(skill.relativePath);
        const content = fs.readFileSync(safeResolved, 'utf-8').toLowerCase();
        return content.includes(query);
      } catch {
        return false;
      }
    }

    return true;
  });

  return {
    content: [
      {
        type: 'text',
        text: results.length === 0
          ? `No skills found matching: "${query}"`
          : `Found ${results.length} skill(s) matching "${query}":\n\n` +
            results.map(s => `• ${s.name}: ${s.description}`).join('\n'),
      },
    ],
  };
}

/**
 * List all available skills
 */
function handleListSkills() {
  const skills = discoverSkills();

  if (skills.length === 0) {
    return {
      content: [
        {
          type: 'text',
          text: 'No skills found in the skills directory.',
        },
      ],
    };
  }

  const skillList = skills
    .map(skill => `• ${skill.name}: ${skill.description}`)
    .join('\n');

  return {
    content: [
      {
        type: 'text',
        text: `Available newsroom skills (${skills.length} total):\n\n${skillList}`,
      },
    ],
  };
}

/**
 * Get a specific skill by name
 */
function handleGetSkill(input) {
  const skillName = input.name;
  const skills = discoverSkills();

  const skill = skills.find(s =>
    s.name.toLowerCase() === skillName.toLowerCase()
  );

  if (!skill) {
    return {
      content: [
        {
          type: 'text',
          text: `Skill not found: "${skillName}". Use list-skills to see available options.`,
        },
      ],
    };
  }

  try {
    const safeResolved = resolveSkillPath(skill.relativePath);
    const content = fs.readFileSync(safeResolved, 'utf-8');

    return {
      content: [
        {
          type: 'text',
          text: content,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error loading skill "${skillName}": ${error.message}`,
        },
      ],
    };
  }
}

/**
 * Handle graceful shutdown
 */
process.on('SIGINT', async () => {
  console.error('SIGINT received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.error('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

/**
 * Start the server
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`${SERVER_NAME} v${SERVER_VERSION} started successfully`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
