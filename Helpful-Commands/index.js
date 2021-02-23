const DiscordJS = require("discord.js")
require("dotenv").config()

const client = new DiscordJS.Client()

// import files
const ping = require("./commands/ping");
const counters = require("./commands/counters");

//initialize bot 
client.on("ready", () => {
    console.log("Be Helpful")

    // initizlize apropriate files
    ping(client)
    counters(client)


})

client.login(process.env.TOKEN)