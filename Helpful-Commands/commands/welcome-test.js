const Discord = require('discord.js');

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

