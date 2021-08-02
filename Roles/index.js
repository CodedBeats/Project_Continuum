const DiscordJS = require("discord.js")
require("dotenv").config()

const client = new DiscordJS.Client()

// import files
// const roleClaim = require("./roleClaim")
const roleClaim2 = require("./roleClaim2")
const reanimate = require("./reanimate")


//initialize bot 
client.on("ready", () => {
    console.log("Recieve Roles")

    // initizlize apropriate files
    // roleClaim(client)
    roleClaim2(client)
    reanimate(client, "871646091941146624", "red")
})

client.login(process.env.TOKEN)