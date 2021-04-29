const Discord = require('discord.js');

module.exports = client => {
    client.on("message", message => {
        if (message.content.toLowerCase() === "$member count") {
            let serverID = message.guild.id;
            let guild = client.guilds.cache.get(serverID)
            let members = guild.memberCount // - 5
            // let onlineMemberCount = guild.members.filter(m => m.presence.status === "online").size     * .filter wont work *
            // console.log(onlineMemberCount)
            // message.channel.send(`The ${message.guild.name} has ${members} members`)
            console.log("Server member count")

            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server's Member", '')
            .setDescription(`The ${message.guild.name} has ${members} members`)
            message.channel.send(embed);
        } 

        else if (message.content.toLowerCase() === "$bot servers") {
            
            let serverlist = ''
            client.guilds.cache.forEach((guild) => {
                serverlist = serverlist.concat(" - " + guild.name + ": Members: " + guild.memberCount + "\n")
            })
    
            console.log("Bot's Servers")

            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Servers With Project Continuum", '')
            .setDescription(serverlist)
            message.channel.send(embed);
        }
    })


}

// client.guilds.size