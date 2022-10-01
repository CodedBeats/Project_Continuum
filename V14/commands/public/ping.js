// dependencies
const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js")
const { execute } = require("../../events/client/ready")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Will respond with pong"),
    /**
    * @param {ChatInputCommandInteraction} interaction
    */
   execute(interaction) {
    interaction.reply({
        content: "Pong",
        // only have this message visible to the user who used the command
        ephemeral: true
    })
   }
}