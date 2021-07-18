const Discord = require('discord.js');

module.exports = client => {

    client.on('message', message => {
        if (message.content.toLowerCase().startsWith(`$is`)) {
            let args = message.content.split(" ")

            // Catch Errors
            if (args[2].toLowerCase() !== "in") {

                let format = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Find User Format")
                .setDescription("$is   *`User`*   in   *`Server`* \n (make sure you have the capital letters right)")
                message.channel.send(format)
                return

            } else if (message.author.bot) {
                return
            }

            // Define arguments
            let userName = args[1]
            let serverName = ``
            if (args.length == 4) {
                serverName = `${args[3]}`
            } else if(args.length == 5) {
                serverName = `${args[3]} ${args[4]}`
            } 

            // Find user and server objects
            user = client.users.cache.find(user => user.username === userName)
            server = client.guilds.cache.find(server => server.name === serverName)

            // Send Result
            if (server.member(user.id)) {
                message.channel.send(`Yes, ${user} **IS** in ${server}`);
                console.log(`${user.username} is in ${server}`)
            } else {
                message.channel.send(`No, ${user} is **NOT** in ${server}`)
                console.log(`${user.username} is not in ${server}`)
            }
        } 
    }); 

}