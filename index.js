const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const { RichPresence } = require('discord.js-selfbot-rpc');

client.on('ready', async () => {

const presence = new RichPresence()
        .setStatus('dnd') // Must be one of (online, idle, dnd) default is online
        .setType('LISTENING') // Must be one of (PLAYING, STREAMING, LISTENING, WATCHING) default is PLAYING
        .setName('To Her')
        .setDetails('Watching her yapping')
        .setState('Cutee...')
  .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1290896763472969760/1291649572510371903/combos.io_Vanessa_-_Photo_-_34.jpg?ex=6700dde7&is=66ff8c67&hm=f1b749d2a3cf6e93ae6bc874c14aa12ed85b82060650fd4fbfca136484915f1b&")
        .setAssetsLargeText('Vii')
        .setTimestamp();

  client.user.setPresence(presence.toData());
  console.log(`${client.user.username} is ready!`);
})


  


client.login(process.env.DISCORD_TOKEN)
