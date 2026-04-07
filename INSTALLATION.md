# Installation

Newsroom Extension runs as an MCP server on Claude Desktop and Claude Code, and as a native extension on Gemini CLI. Each platform section lists the fastest option first.

## Gemini CLI

### Option 1: Install from GitHub (recommended)

```bash
gemini extensions install https://github.com/ehurrn/newsroom-extension
```

The extension auto-installs its Node.js dependencies on first run.

### Option 2: Link a local clone

```bash
git clone https://github.com/ehurrn/newsroom-extension.git
cd newsroom-extension
gemini extensions link .
```

### Verify

```bash
gemini extensions list          # Should show newsroom-extension
```

Then in a Gemini session, ask it to use `get-skill` with the name `investigative-journalist`.

---

## Claude Desktop

### Option 1: Clone from GitHub (recommended)

```bash
git clone https://github.com/ehurrn/newsroom-extension.git
cd newsroom-extension
npm install
```

Then add the server to your Claude Desktop config:

**macOS:** `~/.claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "newsroom": {
      "command": "node",
      "args": ["/absolute/path/to/newsroom-extension/server.js"]
    }
  }
}
```

Replace `/absolute/path/to/newsroom-extension` with the actual path on your machine. The path must be absolute — `~/` and relative paths will not work.

Restart Claude Desktop. The extension should appear in the Tools panel.

### Option 2: npx (no clone needed)

If the package is published to npm, you can run directly:

```json
{
  "mcpServers": {
    "newsroom": {
      "command": "npx",
      "args": ["-y", "newsroom-extension-mcp"]
    }
  }
}
```

### Verify

Open Claude Desktop, expand the Tools panel (bottom right), and confirm "newsroom" appears with three tools: `list-skills`, `get-skill`, and `search-skills`.

Test by asking: "Use the list-skills tool to show me all available newsroom skills."

---

## Claude Code

### Option 1: Add from a local clone (recommended)

```bash
git clone https://github.com/ehurrn/newsroom-extension.git
cd newsroom-extension
npm install
claude mcp add newsroom -- node /absolute/path/to/newsroom-extension/server.js
```

### Option 2: Add directly (if you already have the repo)

```bash
claude mcp add newsroom -- node /path/to/newsroom-extension/server.js
```

### Verify

```bash
claude mcp list                 # Should show "newsroom"
```

Then in a Claude Code session, ask Claude to call `list-skills`.

---

## Updating

### Gemini CLI

```bash
cd /path/to/newsroom-extension
git pull origin main
```

If installed via `gemini extensions install`:

```bash
gemini extensions update newsroom-extension
```

### Claude Desktop / Claude Code

```bash
cd /path/to/newsroom-extension
git pull origin main
npm install
```

Then restart Claude Desktop (Claude Code picks up changes automatically).

---

## Troubleshooting

### "Extension not found" (Gemini CLI)

Verify the extension path and re-link:

```bash
ls /path/to/newsroom-extension/gemini-extension.json   # Must exist
gemini extensions link /path/to/newsroom-extension
```

### "MCP server failed to start" (Claude Desktop)

Check these in order:

1. Node.js 18+ installed: `node --version`
2. Dependencies installed: `cd /path/to/newsroom-extension && npm install`
3. Config path is absolute and correct (not `~`, not relative)
4. Config file is valid JSON — paste into [JSONLint](https://jsonlint.com/) to check
5. Server starts manually: `node /path/to/newsroom-extension/server.js` (should print "started successfully" to stderr and wait for stdin)

### "No tools found" (Claude Code)

Verify the MCP is registered:

```bash
claude mcp list
```

If missing, re-add it:

```bash
claude mcp add newsroom -- node /path/to/newsroom-extension/server.js
```

### Skills load but are slow

The MCP server reads skill files from disk on first request and caches them for 30 seconds. If the skills directory is on a slow filesystem, the first call may be delayed. Subsequent calls within 30 seconds use the cache.

---

## Uninstalling

### Gemini CLI

```bash
gemini extensions uninstall newsroom-extension
```

### Claude Desktop

Remove the `"newsroom"` entry from your `claude_desktop_config.json` and restart Claude Desktop.

### Claude Code

```bash
claude mcp remove newsroom
```
