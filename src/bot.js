require('dotenv').config();
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const client = new Client({ws: {intents: ['DIRECT_MESSAGES', 
                                          'DIRECT_MESSAGE_REACTIONS', 
                                          'DIRECT_MESSAGE_TYPING', 
                                          'GUILD_MESSAGES',
                                          'GUILDS',]}, 
                                partials: ['USER', 
                                           'REACTION', 
                                           'CHANNEL', 
                                           'MESSAGE']});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})(); 

