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

            let user = message.mentions.users.first()
            let userAvatarURL = user.displayAvatarURL({dynamic : true, size: 2048})
            let userAvatar = user.displayAvatarURL({dynamic : true, size: 1024}); 
            let avatarEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(user.username)
            .setDescription(`**[Avatar URL](${userAvatarURL})**`)
            .setImage(userAvatar);

            message.channel.send(avatarEmbed);
            console.log("Selected User's Avatar")
            // console.log(userAvatarURL)
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