module.exports = client => {
    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === "$ping" || "$latency") {
            message.reply("Calculating Ping.....").then(resultMessage => {
                const ping = resultMessage.createdTimestamp - message.createdTimestamp
            })
            message.channel.send(`\n Bot Latency: ${ping}ms \n API Latency: ${client.ws.ping}ms`)
            console.log("Ping Sent")
        }
    });
}