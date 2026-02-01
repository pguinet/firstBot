const { ActivityType } = require("discord.js");

module.exports = async client => {
  // Log that the bot is online.
  console.log(`${client.user.tag}, ready to serve ${client.users.cache.size} users in ${client.guilds.cache.size} servers.`, "ready");
  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(`déConfiné au datacenter`, { type: ActivityType.Playing });
};
