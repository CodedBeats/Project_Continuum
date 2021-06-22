const Discord = require('discord.js');

//=== Welcome in a channel ===//
/*
module.exports = client => {
    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === 'welcome gif') {
            const serverIcon = message.member.guild.iconURL();

            const welcomeGifs = [
                "https://cdn.discordapp.com/attachments/717586690041970688/802428011261460510/kpHvqo.gif",
                "https://media1.tenor.com/images/3e2e5fcce1fdb994cea46097ccbd65d9/tenor.gif?itemid=12122103",
                "https://media1.tenor.com/images/41d4de933c2b5229422bda7ee1bfb82d/tenor.gif?itemid=18109761",
                "https://media1.tenor.com/images/857a9fed91255db5d4960ebe32501bbc/tenor.gif?itemid=8225006",
            ]
            let chanceWelcomeGifs = welcomeGifs[Math.floor(Math.random() * welcomeGifs.length)];
            
            const welcomeEmbed = new Discord.MessageEmbed()
            .setColor("EE1111")
            .setThumbnail("https://cdn.discordapp.com/attachments/717586690041970688/802439752417935370/AllJointHatchetfish-max-1mb.gif")
            .setTitle(`Welcome To The Gulag!`)
            .setDescription(`Hey <@${message.member.id}>, Welcome To The Gulag \n 
                            [Invite Your Friends](https://discord.gg/2WBDtQFYtW)`)
            .addFields(
                {
                    name: "Getting Started?",
                    value: `Please Check Out Nothing Cause This Is The Gulag, You Will Find Out The Rules On Your Own`,
                    iniline: false,
                },
                )
            .setImage(chanceWelcomeGifs)
            .setFooter("Be Wary Of The Cook", serverIcon)
            .setTimestamp()
                    
                    
            const welcomeTestChannel = "762617904109060116"
            message.member.guild.channels.cache.get(welcomeTestChannel).send(welcomeEmbed);
        }
    });
}
*/

//=== Welcome in a DM ===//

module.exports = client => {
    //==========================================   Velox Welcome   ==========================================//
    
        //channel IDs
        const veloxAboutUsChannel = "753614485960523876";	
        const veloxSantaRulesChannel = "678218715166146601";
        const veloxRoleClaimChannel = "764460926639276053";
        
    
        // Will need its own discord bot for a specialised welcome
        // this code is called when someone joins the server
        client.on("guildMemberAdd", member => {
            
            // define server's avatar as an icon
            const serverIcon = member.guild.iconURL();
            const serverIcon2 = "https://cdn.discordapp.com/attachments/766949433912328214/856510707726286858/a_0a0f0336f27f0842064fadbe720420e5.gif"
            
            // construct embed	
            const welcomeEmbedPM = new Discord.MessageEmbed()
            .setAuthor("Velox", serverIcon2)
            .setColor("35363A")
            .setThumbnail(serverIcon2)
            .setTitle(`Welcome To Velox!`)
            .setDescription(`Hey <@${member.id}>, Welcome To Velox \n 
                            Invite Your Friends https://discord.gg/RTP4zYu`)
            // set content
            .addFields(
                {
                    name: "Getting Started?",
                    value: 
                    `Familiarize yourself with.....
                    Once you have read through them, check out.... to view & assign available roles, and to learn how to be notified for social media posts!`,
                    iniline: false,
                },
                // {
                // 	name: "\u200B",
                // 	value: "\u200B"
                // },
                {
                    name: "Velox Socials",
                    value: `
                    [Velox On Twitch](https://www.twitch.tv/wearevelox)
                    [Velox On Instagram](https://www.instagram.com/wearevelox/)
                    [Velox On Twitter](https://twitter.com/wearevelox)
                    [Velox On YouTube](https://www.youtube.com/channel/UCqW_EYUJuHeiGRw4Y8WsEkw)
                    [velox On TickTock](https://vm.tiktok.com/ZMdAVVcYY/)
                    `,
                    iniline: false,
                },
                )
            // set banner
            .setImage("https://cdn.discordapp.com/attachments/766949433912328214/831108294935969812/Main.jpg")
            .setFooter("Footer Text", serverIcon2)
            .setTimestamp()
            
            // private message the user
            member.send(welcomeEmbedPM)
    
            // log the sucessful command in the terminal
            console.log("Welcome Messaged New User");
        });
    }
