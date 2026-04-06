# Installation Guide

Newsroom works across three platforms. Choose the one that matches your workflow, or install on multiple platforms for flexibility.

## Gemini CLI Installation

Requires Gemini CLI to be installed. [Install Gemini CLI here.](https://ai.google.dev/gemini-api/docs/client-libraries)

### Option 1: Install from GitHub (Preferred)

For immediate use:

```bash
gemini extensions install https://github.com/ehurrn/newsroom-extension
```

*Note: The extension automatically handles its own dependencies on first run.*


### Option 2: Manual Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ehurrn/newsroom-extension.git
   cd newsroom-extension
   ```

2. Link it:
   ```bash
   gemini extensions link .
   ```

---

## Claude Code Installation

Claude Code supports Newsroom as a plugin.


## Claude Desktop Installation

Claude Desktop integrates Newsroom as a Node.js MCP server for native macOS/Windows support.

### Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org/))
- Claude Desktop application installed

### Step 1: Set Up the MCP Server

1. Clone the repository:
   ```bash
   git clone https://github.com/ehurrn/newsroom-extension.git
   cd newsroom-extension
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Verify the MCP server configuration exists:
   ```bash
   ls -la mcp-server.js
   ```

### Step 2: Configure Claude Desktop

1. **Locate your Claude Desktop config file:**

   **macOS:**
   ```bash
   ~/.claude/claude_desktop_config.json
   ```

   **Windows:**
   ```
   %APPDATA%\Claude\claude_desktop_config.json
   ```

2. **Open the config file** in a text editor.

3. **Add the Newsroom Extension server** to the `mcpServers` section:

   ```json
   {
     "mcpServers": {
       "newsroom-extension": {
         "command": "node",
         "args": ["/path/to/newsroom-extension/mcp-server.js"]
       }
     }
   }
   ```

   Replace `/path/to/newsroom-extension` with your actual installation path.

4. **Full example config:**

   ```json
   {
     "mcpServers": {
       "newsroom-extension": {
         "command": "node",
         "args": ["/Users/yourname/dev/newsroom-extension/mcp-server.js"],
         "disabled": false,
         "autoApprove": ["read_file", "write_file"]
       }
     }
   }
   ```

### Step 3: Restart Claude Desktop

Close and reopen Claude Desktop completely. The extension will load automatically.

### Step 4: Verify Installation

1. In Claude Desktop, open the Tools panel (bottom right).
2. You should see "Newsroom Extension" listed.
3. Expand it to see all available skills.
4. Test by asking: "Can you help me set up an investigation using the Investigative Journalist Framework?"

### Verification Checklist

- [ ] Node.js 18+ is installed (`node --version`)
- [ ] Extension directory exists and contains `mcp-server.js`
- [ ] `npm install` completed without errors
- [ ] Config file is valid JSON (use JSONLint if unsure)
- [ ] Claude Desktop shows extension in Tools panel
- [ ] Skills appear as callable tools in conversations


---

## Keeping Skills Updated

### Gemini CLI

Check for updates:
```bash
gemini extensions list
```

Update an installed extension:
```bash
gemini extensions update newsroom-extension
```

### Claude Code

 
### Claude Desktop

Update the Node.js MCP server:

```bash
cd /path/to/newsroom-extension
git pull origin main
npm install
# Restart Claude Desktop
```

---

## Troubleshooting

### "Skills not loading" (Claude Code)

**Problem:** Skills appear in panel but can't be called

**Solution:**
1. Check that the repository is public or properly authorized
2. Try removing and re-adding the extension
3. Clear Claude Code cache: Menu → Settings → Cache → Clear
4. Restart Claude Code

### "MCP server failed to start" (Claude Desktop)

**Problem:** Error in Tools panel when expanding extension

**Solution:**
1. Verify Node.js version: `node --version` (should be 18+)
2. Check config file syntax: Paste into [JSONLint](https://jsonlint.com/)
3. Verify path in config is absolute: `/Users/yourname/...` not `~/...`
4. Check file permissions: `chmod +x /path/to/newsroom-extension/mcp-server.js`
5. Review Claude Desktop logs: Help → Logs

### "Port already in use" (Claude Desktop)

**Problem:** MCP server fails with "port 3000 already in use"

**Solution:**
1. Find the process: `lsof -i :3000`
2. Kill it: `kill -9 <PID>`
3. Restart Claude Desktop

### Skills appear but are slow (All Platforms)

**Problem:** Skill responses are delayed

**Solution:**
1. Check your internet connection (skills may fetch external data)
2. Verify API rate limits aren't exceeded
3. Try running a single skill in isolation
4. Check system resources: `top` or Task Manager

---

## Uninstallation

### Gemini CLI

```bash
gemini extensions uninstall newsroom-extension
```

### Claude Code

/plugin unistall

### Claude Desktop

1. Remove from config file: `~/.claude/claude_desktop_config.json`
2. Delete the repository directory (optional)
3. Restart Claude Desktop

---

## Getting Help

- **GitHub Issues:** [github.com/ehurrn/newsroom-extension/issues](https://github.com/ehurrn/newsroom-extension/issues)
- **Documentation:** See [README.md](README.md) and [EXTENSION_MANIFEST.md](EXTENSION_MANIFEST.md)
- **Contributing:** See [CONTRIBUTING.md](CONTRIBUTING.md)
