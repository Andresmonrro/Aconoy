const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/* const embed = new EmbedBuilder()
.setColor('#fffff')
.addFields(
    {
        name: 'prueba', value: 'priueba value'
    }
)
.setImage('https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/6/66/Webi_Wabo.jpeg/revision/latest?cb=20200928223732&path-prefix=es')
.setTitle('titulo de pureba') */

const embedd = {
    color: 0x0099ff,
    title: 'help',
    description: `acerca de los usos del bot`,
    image: 'https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/6/66/Webi_Wabo.jpeg/revision/latest?cb=20200928223732&path-prefix=es'
  } 

module.exports ={
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('acerca de los usos del bot'),
	async execute(interaction) {
		await interaction.reply({embed: [embedd]});
	},
};
