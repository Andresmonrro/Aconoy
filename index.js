const { Client, Events } = require("discord.js");
const config = require("./config.json");

const prefix = "!u";

const client = new Client({
    intents: 53608447,
});

client.on(Events.ClientReady, async () => {
  console.log(`conectado como ${client.user.username}`);
});

client.on(Events.MessageCreate, async (message) => {
    if((message.content === 'hola' || message.content === 'Hola') &&  message.author.bot) {
        message.reply("hola, eres un bot")
    } else if (message.content === 'hola' || message.content === 'Hola') {
        message.reply("hola bro")
    }
});

client.login(config.BOT_TOKEN);
