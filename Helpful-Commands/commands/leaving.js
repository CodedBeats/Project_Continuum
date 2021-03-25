module.exports = client => {

    client.on("guildMemberRemove", member => {
        console.log("hi")
        console.log(member)
        const leaveChannel = "824272001064632391"
        client.channels.cache.get(leaveChannel).send(`${member.id} has left the Gulag`)
            
    });

}