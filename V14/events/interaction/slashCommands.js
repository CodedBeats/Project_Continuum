// dependencies
const { ChatInputCommandInteraction } = require("discord.js")

module.exports = {
    name: "interactionCreate",
    /**
    *
    * @param {ChatInputCommandInteraction} interaction
    */
    execute(interaction, client) {
        // check if interaction type is not "/" command then exit out of this file
        if(!interaction.isChatInputCommand()) return

        const command = client.commands.get(interaction.commandName)
        // if we didn't find this command
        if(!command) 
        // exit file and reply to user
        return interaction.reply({
            content: "This command is outdate",
            // only have this message visible to the user who used the command
            ephemeral: true
        })

        // if the command is a developer command and the user who used the command isn't me
        if(command.developer && interaction.user.id !== "376933393822121996")
        // exit file and reply to user
        return interaction.reply({
            content: "This command is only available to the developer",
            // only have this message visible to the user who used the command
            ephemeral: true
        })

        command.execute(interaction, client)

    }
}