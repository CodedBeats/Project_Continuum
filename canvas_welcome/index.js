const DiscordJS = require("discord.js")
const WOKCommands = require("wokcommands")
require("dotenv").config()

const client = new DiscordJS.Client()

//listen for bot activation
client.on("ready", () => {
    console.log("Vamanos")

    new WOKCommands(client, "commands", "features")
        .setMongoPath(process.env.MONGO_URI)
        .setDefaultPrefix("!")
})

client.login(process.env.TOKEN)

