const Discord = require('discord.js');

module.exports = client => {
    client.on("message", message => {
        if (message.content.toLowerCase() === "$member count") {
            let serverID = message.guild.id;
            let guild = client.guilds.cache.get(serverID)
            message.channel.send(`The ${message.guild.name} has ${guild.memberCount} members`)
            console.log("Server member count")
        }
    })


    client.on("message", message => {
        if (message.content.toLowerCase() === "$bot servers") {
            
            let serverlist = ''
            client.guilds.cache.forEach((guild) => {
                serverlist = serverlist.concat(" - " + guild.name + ": Members: " + guild.memberCount + "\n")
            })
    
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Servers With Project Continuum", '')
            .setDescription(serverlist)
            message.channel.send(embed);
        }
    })

}

// client.guilds.size