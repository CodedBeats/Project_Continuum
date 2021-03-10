const DiscordJS = require("discord.js")
require("dotenv").config()

const client = new DiscordJS.Client()

// import files
const ping = require("./commands/ping");
const counters = require("./commands/counters");

//initialize bot 
client.on("ready", () => {
    console.log("Be Helpful")


    // initialize live member count channel
    let myGuid = client.guilds.cache.get("731399692868649030")
    let myMemberCount = myGuid.memberCount
    // myMemberCount = myMemberCount - 5;
    // console.log(myMemberCount)
    let memberCountChannel = myGuid.channels.cache.get("818751101557407754")
    // console.log(memberCountChannel.name)
    memberCountChannel.setName("Members: " + myMemberCount)
    .then(result => console.log("Guild Mmembers Is Live"))
    .catch(error => console.log(error))


    // initizlize apropriate files
    ping(client)
    counters(client)
})


// Moderating live member count
client.on("guildMemberAdd", member => {
    let myGuid = client.guilds.cache.get("731399692868649030")
    let myMemberCount = myGuid.memberCount
    // myMemberCount = myMemberCount - 5;
    let memberCountChannel = myGuid.channels.cache.get("818751101557407754")
    memberCountChannel.setName("Members: " + myMemberCount)
    .then(result => console.log("Gained a guild member"))
    .catch(error => console.log(error))
})

client.on("guildMemberRemove", member => {
    let myGuid = client.guilds.cache.get("731399692868649030")
    let myMemberCount = myGuid.memberCount
    // myMemberCount = myMemberCount - 5;
    let memberCountChannel = myGuid.channels.cache.get("818751101557407754")
    memberCountChannel.setName("Members: " + myMemberCount)
    .then(result => console.log("Lost a guild member"))
    .catch(error => console.log(error))
})



client.login(process.env.TOKEN)