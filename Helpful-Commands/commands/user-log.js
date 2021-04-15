const Discord = require('discord.js');
const commandsPrefix = "@"
module.exports = client => {

    

    

    client.on("message", message => {
        if (message.content === `${commandsPrefix}log user`) {
            message.channel.send(`${message.author} is in the ${message.guild.name}`)
            // console.log(message.member)
        }
    })


    




    

    
    


    const hiBye = "832235277333823498"
    client.on("guildMemberAdd", member => { 
        console.log("New User")
        client.channels.cache.get(hiBye).send(`<@${member.id}> has joined ${member.guild.name}`)
            
    });

    client.on("guildMemberRemove", member => {
        console.log("User Left")
        client.channels.cache.get(hiBye).send(`<@${member.id}> has left ${member.guild.name}`)
    });
}