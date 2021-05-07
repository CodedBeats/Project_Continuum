const Discord = require('discord.js');
const commandsPrefix = "^"
module.exports = client => {

   

    

//=====================================   Prune Messages   =====================================//

client.on("message", message => {
    if (message.content.startsWith(`${commandsPrefix}prune`)) {
        let args = message.content.trim().split(/ +/g);
        console.log(args)
        if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command")
        if (isNaN(args[1])) return message.channel.send("Please input a valid number") // isNaN = is not a number
        if (args[1] > 100) return message.channel.send("Insert a number less than 100") // Discord limits bulkDelete at 100
        if (args[1] < 2) return message.channel.send("Insert a number more than 1")


        message.delete()
        message.channel.bulkDelete(args[1])
        .then(messages => message.channel.send(`Deleted ${messages.size}/${args[1]} messages.`)).then(d => d.delete({timeout: 10000}))
        .catch(() => message.channel.send("Something went wrong, while deleting the selected messages")) // This is the error displayed when the bot doesn't have an access to do it


        
   }
})







    
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