const { REST, Routes,Client, Events, channelMention, channelLink, EmbedBuilder, Collection, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const path = require('node:path');
const { log } = require("console");
const { channel, title } = require("process");



//id del canal de pruebas (por si acaso)
const pruebasChannelId = "1261563562342748160";
const rest = new REST().setToken(config.BOT_TOKEN)
const client = new Client( { intents: 53608447, } );
const prefix = '¿¿'
const svStatusChannelId = '1262490995761610852'
var svStatus = false
//
//ready confirmacion
client.on(Events.ClientReady, async () => {
    console.log(`conectado como ${client.user.username}`);
});

// respuestas a aconoy
client.on(Events.MessageCreate, async (message) => {
  if  (message.content === 'aconoy' || message.content == 'Aconoy') { 
    const embed = {
      color: 0x0099ff,
      title: 'te quiero bro',
      description: `att: Aconoy :)`
    }
    message.reply({ embeds: [embed]});
  }
});

client.on(Events.MessageCreate, async (message) => {
	if  (message.content === 'webi wabo' || message.content == 'Webi wabo') { 
	  message.reply('https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/6/66/Webi_Wabo.jpeg/revision/latest?cb=20200928223732&path-prefix=es');
	}
  });

client.on(Events.MessageCreate, async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return
	if (message.content.slice(3) === 'help') {
	let embed = {
	    color: 0x0099ff,
        title: 'acerca de los usos del bot ',
        description: `**respuestas divertidas**: 
		-webi wabo
		-aconoy
		
		***bot en desarrollo***`
	}
	if (message.content.startsWith(prefix)) {
		message.reply({embeds: [embed],})
	}

}})

client.on(Events.MessageCreate, async (message) => {
	if ((message.author.username === 'minecraft [Untitled]') || (message.content === 'ccpr')) {
		let embed = (svStatus) => {return {
			title: 'estado del servidor',
			color: 0x0099ff,
			description: svStatus ? ':white_check_mark: **servidor prendido**' : ':octagonal_sign: **servidor apagado**'
		}}
	    const channel = client.channels.cache.get(svStatusChannelId)
		log('si es')
		//await channel.send('sss')
/* 		if (message.embeds) {
			log('embed', message.embeds[0])
		} */
		if (message.content === ':octagonal_sign: **Server has stopped**') {
			svStatus = false
			log('server off')
			log(message.content)
			await channel.setName('sv-status-off');
			await channel.send({embed: [embed(svStatus)]})
		} 
		if (message.content === ':white_check_mark: **Server has started**') {
			svStatus = true
			log('server on')
			log(message.content)
		    await channel.setName('server-status-on');
			await channel.send({embed: [embed(svStatus)]})
		}
	}
})

//login
client.login(config.BOT_TOKEN);
