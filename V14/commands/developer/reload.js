// dependencies
const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagBits, Client } = require("discord.js")
// import func
const { loadCommands } = require("../../handlers/commandHandler")
const { loadEvents } = require("../../handlers/eventHandler")

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload commands/events")
    .setDefaultMemberPermissions(PermissionFlagBits.Administrator)

    .addSubcommand((options) => options
    .setName("events")
    .setDescription("Reload events"))

    .addSubcommand((options) => options
    .setName("commands")
    .setDescription("Reload commands")),
    /**
    * @param {ChatInputCommandInteraction} interaction
    * @param {Client} client
    */
   execute(interaction, client) {
        const subCommand = interaction.options.getSubcommand()

        switch(subCommand) {
            case "events": {
                // go into collection of events and remove every listener that we have put in the collection
                for(const [key, value] of client.events) {
                    client.removeListener(`${key}`, value, true)
                    loadEvents(client)
                    interaction.reply({
                        content: "Reloaded events",
                        // only have this message visible to the user who used the command
                        ephemeral: true
                    })
                }
            }
            break
            case "commands": {
                loadCommands(client)
                interaction.reply({
                    content: "Reloaded commands",
                    // only have this message visible to the user who used the command
                    ephemeral: true
                })
            }
            break
        }
   }
}