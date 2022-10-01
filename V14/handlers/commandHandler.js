async function loadCommands(client) {
    // dependencies
    const ascii = require("ascii-table")
    const table = new ascii().setHeading("Commands", "Status")
    // import func
    const { loadFiles } = require("../functions/fileLoader")

    // awaiting everything deleting in the previous collection (fresh slate)
    await client.commands.clear()

    let commandsArray = []

    // telling the loadFiles func to load all files in "commands" folder
    const Files = await loadFiles("commands")

    Files.forEach((file) => {
        // define each file in this array as a command
        const command = require(file)
        client.commands.set(command.data.name, command)

        // push each command from the files array into command array
        commandsArray.push(command.data.toJSON())

        table.addRow(command.data.name, "✅")
    })

    client.application.commands.set(commandsArray)

    return console.log(table.toString(), "\nCommands Loaded")
}

module.exports = { loadCommands }