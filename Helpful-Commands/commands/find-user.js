const Discord = require('discord.js');

module.exports = client => {

    let users = [
        {
            Suzu : ""
        },
        {
            Silm : "444431900598206464"
        },
        {
            Mz : "607337122248261632"
        },
        {
            Cook : ""
        },
    ]

    let guilds = [
        {
            Gulag : "743057030100549702"
            // Simp bot is not in this server
        },
        {
            Madlab : "731399692868649030"
        },
        {
            Eden : "794898107744911361"
        },
        {
            Safehouse : "853319147189567538"
            // Continuum bot is not in this server
            // Simp bot is not in this server
        },
    ]

    function findUser(guild, user) {
        if (guild.member(USER_ID)) {
            console.log("This user is in this server")
        }
    }

    client.on('message', message => {
        if (message.content.toLowerCase() === `<${suzu}>`) {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command")
            
            
            message.channel.send("x");
            console.log("x")
        } 
    }); 
    
    
    client.on('message', message => {
        if (message.content.toLowerCase() === `cook?`) {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command")
            let guild = client.guilds.get("731399692868649030")
            let USER_ID = "376933393822121996"
            if (guild.member(USER_ID)) {
                console.log("This user is in this server")
            }
            
            message.channel.send("here");
            console.log("x")
        } 
    });

}