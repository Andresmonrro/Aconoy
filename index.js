const { REST, Routes,Client, Events, channelMention, channelLink, EmbedBuilder, Collection, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const path = require('node:path');
const ping = require('./commands/ping');
const { log } = require("console");



//id del canal de pruebas (por si acaso)
const pruebasChannelId = "1261563562342748160";
const rest = new REST().setToken(config.BOT_TOKEN)
const client = new Client( { intents: 53608447, } );
client.commands = new Collection()
const commands = [];
//
//ready confirmacion
client.on(Events.ClientReady, async () => {
    console.log(ping)
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

//definicion de comandos 

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(foldersPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
      log(command.data)
      commands.push(command.data.toJSON());
			client.commands.set(command.data.name, command);
      console.log('todook');
		} else {
			console.warn(`[WARNING] The command at ${commandFiles} is missing a required "data" or "execute" property.`);
		}
	}
}


/*registerin of comandawedq*/
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(config.BOT_ID),
			{ body: commands },
		);
    console.log('prueba');
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    console.log('cc' + commands.concat());
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})(); 

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
  const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`el comando ${interaction.commandName} no fue encontrado.`);
    console.log(interaction.client.commands);
		return;
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'hubo un error al ejecutar este comando', ephemeral: true });
		} else {
			await interaction.reply({ content: 'hubo un error al ejecutar este comando', ephemeral: true });
		}
	}
})

//login
client.login(config.BOT_TOKEN);
