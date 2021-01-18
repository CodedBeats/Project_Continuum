const DiscordJS = require("discord.js")
require("dotenv").config()

const client = new DiscordJS.Client()

// import files
const ping = require("./commands/ping")

//initialize bot 
client.on("ready", () => {
    console.log("Be Helpful")

    // initizlize apropriate files
    ping(client)


})

client.login(process.env.TOKEN)