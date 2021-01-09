const DiscordJS = require("discord.js")
const WOKCommands = require("wokcommands")
require("dotenv").config()

const client = new DiscordJS.Client()
const covid = require("./covid")

//listen for bot activation
client.on("ready", () => {
    console.log("Don't Drop The Soap")

    covid(client)
    // const cookID = "376933393822121996"
    // client.channels.cache.get(`764949124147445770`).send(`Im Online <@${cookID}>`)
})

client.login(process.env.TOKEN)