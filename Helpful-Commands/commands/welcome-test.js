module.exports = client => {
    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === 'welcome gif') {
            const serverIcon = message.member.guild.iconURL();

            const welcomeGifs = [
                "https://cdn.discordapp.com/attachments/717586690041970688/802428011261460510/kpHvqo.gif",
                "https://tenor.com/view/welcometrump-trumpwelcome-thumbs-up-gif-12122103",
                "https://tenor.com/view/forest-gump-welcome-group-gif-18109761",
                "https://tenor.com/view/jason-mantzoukas-the-house-greetings-welcome-gif-8225006"
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

