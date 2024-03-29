// ==dependencies==
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js")
// define what we need from GatewayIntentBits
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits
// define what we need from Partials
const { User, Message, GuildMember, ThreadMember } = Partials
// other dependencies
require("dotenv/config")
// ==func import==
const { loadEvents } = require("./handlers/eventHandler")

// import moderation to handle non-commands (this needs to be improved)
const moderation = require("./moderation/blackList")

// init client with what it needs to know
const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages, MessageContent],
    partials: [User, Message, GuildMember, ThreadMember],
})

client.events = new Collection()
client.commands = new Collection()
// loadEvents needs to be below Collection init becuase we clear the collection in this func
loadEvents(client)

// login with TOKEN and set bot's activity to state how many servers it is in
client
.login(process.env.TOKEN)
.then(() => {
    client.user.setActivity(`with ${client.guilds.cache.size} guild(s)`)
    // start up other non-command files
    moderation(client)
})

