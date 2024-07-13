const { Client, Events, channelMention, channelLink, EmbedBuilder } = require("discord.js");
const config = require("./config.json");
const Discord = require("discord.js")

const prefix = "!u";
const pruebasChannelId = "1261563562342748160";

const client = new Client({
    intents: 53608447,
});

client.on(Events.ClientReady, async () => {
    console.log(`conectado como ${client.user.username}`);
});

client.on(Events.MessageCreate, async (message) => {
  const embed = {
    color: 0x0099ff,
	  title: 'metenme',
    description: `${message}`
  }
  /* const pruebasChannel =  client.channels.fetch(pruebasChannelId);
  const chnl = `${message} aaaaa`
  console.log(chnl);
  pruebasChannel.send(embed); */
  if (
    (message.content === "asd" || message.content === "Asd") &&
    message.author.bot
  ) {
    message.reply({ embeds: [embed]});
  } else if (message.content === "asd" || message.content === "Asd") {
    message.reply({ embeds: [embed]});
  }
});

/* client.on('channelCreate', (channelId)=>{
  const pruebasChannel =  client.channels.fetch(pruebasChannelId);
  const chnl = channelId.guildId
  console.log(chnl);
  pruebasChannel.send(chnl);
});

client.on(Events.ChannelDelete, async (channelId) => {
  const pruebasChannel = await client.channels.fetch(pruebasChannelId);
  const chnl = channelId.guildId
  console.log(chnl);
  const embed = new Discord.createComponent()
      .setTitle(' título')
      .setDescription(`pruebaaaaa ${channelId}`)
      .setColor('#00ff00');

  pruebasChannel.send(embed);
}); */

client.login(config.BOT_TOKEN);
