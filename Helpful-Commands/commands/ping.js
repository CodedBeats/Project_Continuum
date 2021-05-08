const Discord = require('discord.js');

module.exports = client => {

    client.on('message', message => {
        if (message.content.toLowerCase() === "$ping" || message.content.toLowerCase() === "$latency") {
            let ping = Date.now() - message.createdTimestamp
            let latency = Math.round(client.ws.ping)

            let pingEmbed = new Discord.MessageEmbed()
            .setDescription(`Ping is ${ping}ms. \n API Latency is ${latency}ms`)
            .setColor("FFFF00")

            message.channel.send(pingEmbed);
            console.log("Bot's Ping Sent")
            
        } 
    });  

}