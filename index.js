#!/usr/bin/node

const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

//client.on("ready", () => {
//  // This event will run if the bot starts, and logs in, successfully.
//  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
//  // Example of changing the bot's playing game to something useful. `client.user` is what the
//  // docs refer to as the "ClientUser".
//  client.user.setActivity(`Confiné à la maison`, {type: "playing"});
//});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
