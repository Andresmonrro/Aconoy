const { Client, Events, channelMention, channelLink, EmbedBuilder } = require("discord.js");
const config = require("./config.json");
const Discord = require("discord.js")

const pruebasChannelId = "1261563562342748160";

const client = new Client({
    intents: 53608447,
});

client.on(Events.ClientReady, async () => {
    console.log(`conectado como ${client.user.username}`);
});

client.on(Events.MessageCreate, async (message) => {

  if  (message.content === 'aconoy' || message.content == 'Aconoy') { 
    const embed = {
      color: 0x0099ff,
      title: 'te quiero bro',
      description: `att: ${message} :)`
    }
    message.reply({ embeds: [embed]});
  }
});

client.login(config.BOT_TOKEN);
