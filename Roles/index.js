const DiscordJS = require("discord.js")
require("dotenv").config()

const client = new DiscordJS.Client()

// import files
// const roleClaim = require("./roleClaim")
const roleClaim2 = require("./roleClaim2")


//initialize bot 
client.on("ready", () => {
    console.log("Recieve Roles")

    // initizlize apropriate files
    // roleClaim(client)
    roleClaim2(client)
})

client.login(process.env.TOKEN)