module.exports = async (client, id, text) => {
    // let channel = message.guild.channels.cache.get("871646091941146624")
    const channel = await client.channels.fetch(id)
  
    channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {
            // Send a new message
            channel.send(text)
        } else {
            // Edit the existing message
            for (const message of messages) {
                message[1].edit(text)
            }
        }
    })
}