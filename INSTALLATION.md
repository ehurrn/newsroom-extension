# Installation

Pick the platform you use. Each section walks you through setup step by step.

## Gemini CLI

### From GitHub (recommended)

Open your terminal and paste:

```
gemini extensions install https://github.com/ehurrn/newsroom-extension
```

Done. The extension automatically sets itself up the first time it runs.

### From a local copy

If you've already downloaded the repository:

```
cd /path/to/newsroom-extension
gemini extensions link .
```

### Verify it works

```
gemini extensions list
```

You should see `newsroom-extension` in the list. Then start a Gemini session and try:

> "Use the investigative-journalist skill to scope a new investigation."

---

## Claude Desktop

### Before you start

You'll need [Node.js](https://nodejs.org/) version 18 or newer. To check, open Terminal (Mac) or Command Prompt (Windows) and type:

```
node --version
```

If you see `v18` or higher, you're good. If not, download it from [nodejs.org](https://nodejs.org/) — choose the LTS version and follow the installer. It takes about 2 minutes.

### Step 1: Download the extension

Open Terminal and paste these three lines one at a time:

```
git clone https://github.com/ehurrn/newsroom-extension.git
cd newsroom-extension
npm install
```

This downloads the extension and sets it up in a folder called `newsroom-extension`.

> **Don't have `git`?** Go to [github.com/ehurrn/newsroom-extension](https://github.com/ehurrn/newsroom-extension), click the green **Code** button, then **Download ZIP**. Unzip it anywhere (your Desktop is fine). Then open Terminal, type `cd ` (with a space after it), drag the unzipped folder onto the Terminal window, press Enter, then type `npm install` and press Enter.
>
> **On Windows?** Instead of dragging the folder, right-click the unzipped folder, choose **Copy as path**, then in Command Prompt type `cd ` and paste the path.

### Step 2: Add to Claude Desktop

Open your Claude Desktop config file in a text editor:

**Mac:** Open Finder, press `Cmd + Shift + G`, paste this path and hit Enter:
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Windows:** Open File Explorer, paste this into the address bar:
```
%APPDATA%\Claude\claude_desktop_config.json
```

If the file is empty or doesn't exist, paste this entire block. Replace the path with where you downloaded the extension:

**Mac example:**
```json
{
  "mcpServers": {
    "newsroom": {
      "command": "node",
      "args": ["/Users/YOURNAME/newsroom-extension/server.js"]
    }
  }
}
```

**Windows example:**
```json
{
  "mcpServers": {
    "newsroom": {
      "command": "node",
      "args": ["C:\\Users\\YOURNAME\\newsroom-extension\\server.js"]
    }
  }
}
```

> **Important:** Use the complete path to `server.js` starting from the root of your drive — like `/Users/jane/newsroom-extension/server.js`, not just `server.js`. If you're unsure, drag the `server.js` file onto a Terminal window (Mac) or right-click it and choose **Copy as path** (Windows).

If the file already has other MCP servers in it, add the `"newsroom": { ... }` block inside the existing `"mcpServers"` object — don't replace the whole file.

Save the file, then **fully quit Claude Desktop** — on Mac, click **Claude** in the menu bar → **Quit Claude**, or press `Cmd + Q`. On Windows, right-click the tray icon → **Quit**. Then reopen it. Just closing the window is not enough.

### Verify it works

In Claude Desktop, click the **+** button next to the prompt box and look for **Connectors** — you should see the newsroom tools listed. Or just ask:

> "Use the list-skills tool to show me all available newsroom skills."

---

## Claude Code (Desktop app)

### Through the UI

1. Click the **+** button next to the prompt box
2. Select **Plugins**
3. Choose **Add plugin**
4. Follow the prompts to add from the local `newsroom-extension` folder

### Through the terminal

If you're comfortable with the terminal:

```
git clone https://github.com/ehurrn/newsroom-extension.git
cd newsroom-extension
npm install
claude mcp add newsroom -- node /full/path/to/newsroom-extension/server.js
```

### Verify it works

Ask Claude:

> "Use the list-skills tool to show me all available newsroom skills."

You should see all 15 skills listed.

---

## Updating

### Gemini CLI

If you installed from GitHub:

```
gemini extensions update newsroom-extension
```

If you linked a local copy:

```
cd /path/to/newsroom-extension
git pull
```

### Claude Desktop / Claude Code

```
cd /path/to/newsroom-extension
git pull
npm install
```

Then restart Claude Desktop. Claude Code picks up changes automatically.

---

## Troubleshooting

### "I don't have git"

Download the ZIP from [github.com/ehurrn/newsroom-extension](https://github.com/ehurrn/newsroom-extension) → green **Code** button → **Download ZIP**. Unzip it and use that folder.

### "node --version says command not found"

Install Node.js from [nodejs.org](https://nodejs.org/). Choose the **LTS** version. After installing, close and reopen your terminal, then try again.

### "npm install gives errors"

Make sure you're inside the `newsroom-extension` folder when you run it. Type `ls` (Mac) or `dir` (Windows) — you should see `server.js` and `package.json` in the listing.

### "Claude Desktop doesn't show the tools"

Check these in order:

1. Did you restart Claude Desktop completely? (Quit the app, not just close the window)
2. Is the path in your config file correct? Drag `server.js` onto a Terminal window to see the real path
3. Is the config file valid? Paste it into [jsonlint.com](https://jsonlint.com/) to check for typos
4. Try running the server manually: open Terminal, type `node /path/to/server.js` — it should print "started successfully" and wait. If it shows an error, that's the problem.

### "Extension not found" (Gemini CLI)

Re-link it:

```
gemini extensions link /path/to/newsroom-extension
```

---

## Uninstalling

### Gemini CLI

```
gemini extensions uninstall newsroom-extension
```

### Claude Desktop

Remove the `"newsroom"` section from your config file and restart Claude Desktop.

### Claude Code

```
claude mcp remove newsroom
```
