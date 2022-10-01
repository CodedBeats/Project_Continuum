module.exports = client => {

    client.on("messageCreate", message => {
        if (message.content.toLowerCase() === "bad words") {
            // delete message 1st
            message.delete()

            // timeout the user 2nd - format:(1 * 60 * 1000)/(min * sec * millisec)
            message.member.timeout(1 * 60 * 1000, 'They deserved it')

            // state the user has been timed-out 3rd
            message.channel.send(`${message.author} said something bad, they've been timed out`)
        }
    })
    
}
