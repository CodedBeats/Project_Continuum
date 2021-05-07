const commandsPrefix = "^"
module.exports = client => {

   

    








    
//=====================================   Prune Messages   =====================================//

client.on("message", message => {
    if (message.content.startsWith(`${commandsPrefix}prune`)) {
        let args = message.content.trim().split(/ +/g); // splits the content of the message erasing blank space and spits out an array
        // console.log(args)
        if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command")
        if (isNaN(args[1])) return message.channel.send("Please input a valid number") // isNaN = is not a number
        if (args[1] > 100) return message.channel.send("Insert a number less than 100") // Discord limits bulkDelete at 100
        if (args[1] < 2) return message.channel.send("Insert a number more than 1")


        message.delete()
        message.channel.bulkDelete(args[1])
        .then(messages => message.channel.send(`Deleted ${messages.size}/${args[1]} messages.`)).then(d => d.delete({timeout: 10000}))
        .catch(() => message.channel.send("Something went wrong, while deleting the selected messages")) // This is the error displayed when the bot doesn't have an access to do it


        
}
})



}