# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FirstBot is a modular Discord bot written in JavaScript using discord.js v14. It uses a plugin-based architecture for commands and event handlers.

## Commands

```bash
npm install          # Install dependencies
npm test             # Run tests (currently runs npm build .)
node index.js        # Run the bot locally
```

For deployment as a systemd service:
```bash
sudo cp system/firstbot.service /etc/systemd/system/
sudo systemctl enable --now firstbot
```

## Architecture

### Dynamic Module Loading

The bot uses dynamic `require()` to load commands and events at startup:

1. **Commands** (`commands/`): Each `.js` file exports a `run` function:
   ```javascript
   exports.run = (client, message, args) => { ... }
   ```
   Commands are stored in `client.commands` (a discord.js Collection) and can be hot-reloaded via `--reload <command>`.

2. **Events** (`events/`): Each file name maps to a Discord.js event (e.g., `messageCreate.js` → `messageCreate` event):
   ```javascript
   module.exports = (client, message) => { ... }
   ```

### Configuration

Copy `config.json.sample` to `config.json` with your Discord bot token and command prefix:
```json
{
  "token": "YOUR_BOT_TOKEN",
  "prefix": "--"
}
```

The config is attached to the client object as `client.config`.

### Message Flow

1. `events/message.js` receives all messages
2. Ignores bot messages and non-prefixed messages
3. Parses command name and arguments
4. Looks up command in `client.commands` Enmap
5. Executes the command's `run` function

## Adding New Commands

Create a new file in `commands/` (e.g., `commands/mycommand.js`):
```javascript
exports.run = (client, message, args) => {
  message.channel.send("Response here");
};
```

The command will be available as `--mycommand` (using the configured prefix).

## Adding New Events

Create a new file in `events/` named after the Discord.js event (e.g., `events/guildMemberAdd.js`):
```javascript
module.exports = (client, member) => {
  // Handle new member
};
```

## Notes

- Never commit `config.json` with real tokens (it's in `.gitignore`)
- The bot runs on Node.js 24+
- Uses discord.js v14
