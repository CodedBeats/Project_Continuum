const Discord = require('discord.js');

module.exports = client => {
//==========================================   About Us Velox  ==========================================//

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === ">>about us") {

        const serverIcon = "https://cdn.discordapp.com/attachments/766949433912328214/856510707726286858/a_0a0f0336f27f0842064fadbe720420e5.gif"
        
        const about = new Discord.MessageEmbed()
        .setColor("#f0e20e")
        .setTitle("__**About Us:**__")
        .setThumbnail(serverIcon)
        .setDescription(
            `This is some text about our server, you can say whatever`
            )
        .setImage("https://cdn.discordapp.com/attachments/766949433912328214/856518973062905886/About_Us.png?size=2048")
            
        message.channel.send(about)
        console.log("About Us Sent");
        
        // console.log(message.member);
    };
});




//==========================================   Contact Velox  ==========================================//

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === ">>socials") {

        const serverIcon = "https://cdn.discordapp.com/attachments/766949433912328214/856510707726286858/a_0a0f0336f27f0842064fadbe720420e5.gif"
        
        const socials = new Discord.MessageEmbed()
        .setColor("#f0e20e")
        .setTitle("__**Socials:**__")
        .setThumbnail(serverIcon)
        .setDescription(
            `
            [Velox On Twitch](https://www.twitch.tv/wearevelox)
            [Velox On Instagram](https://www.instagram.com/wearevelox/)
            [Velox On Twitter](https://twitter.com/wearevelox)
            [Velox On YouTube](https://www.youtube.com/channel/UCqW_EYUJuHeiGRw4Y8WsEkw)
            [Velox On TickTock](https://vm.tiktok.com/ZMdAVVcYY/)
            `
        )
        
        .setImage("https://cdn.discordapp.com/attachments/766949433912328214/856518982432718858/Social_Media.png?size=2048")
            
        message.channel.send(socials)
        console.log("socials sent");
        
        // console.log(message.member);
    };
});



};
