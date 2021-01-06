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

    
    // const cookID = "376933393822121996"
    // client.channels.cache.get(`764949124147445770`).send(`Im Online <@${cookID}>`)
})

client.login(process.env.TOKEN)

