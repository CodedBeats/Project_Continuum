const Discord = require('discord.js');
const commandsPrefix = "^"
module.exports = client => {

    

    











    
//=====================================   User's Avatar   =====================================//
    client.on("message", message => {
         if (message.content.startsWith(`${commandsPrefix}avatar`)) {
            if (!message.mentions.users.size) {
                message.channel.send('Nobody was mentioned');
                return;
            }

            let user = message.mentions.users.first();
            let userAvatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpeg`
            let avatarEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(user.username)
            .setImage(userAvatar);

            message.channel.send(avatarEmbed);
        }
    })


//=====================================   User Join and Leave Alert   =====================================//
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