/* fs.readdirSync('./commands/utility').forEach((commandfile) => {
  const command = require(`./commands/utility/${commandfile}`);
  client.commands.set(command.data.name, command)
});

const REST = new Discord.REST().setToken(config.BOT_TOKEN)

async () =>{
  try {
    await REST.put(
      Discord.Routes.applicationGuildCommands(config.BOT_ID, config.GUILD_ID),
      {
        body: client.commands.map((cdm) => cdm.data.toJSON()),
      }
    );
    console.log(`laslja matenme ${client.commands.size} loadddd`);
  } catch (error) {
    console.log(error, 'vvvvnofuncionaaaaaa');
  }
} */