async function loadEvents(client) {
    // dependencies
    const ascii = require("ascii-table")
    const table = new ascii().setHeading("Events", "Status")
    // import loadFiles func
    const { loadFiles } = require("../functions/fileLoader")

    // awaiting everything deleting in the previous collection (fresh slate)
    await client.events.clear()

    // telling the loadFiles func to load all files in "events folder"
    const Files = await loadFiles("events")

    Files.forEach((file) => {
        const event = require(file)

        const execute = (...args) => event.execute(...args, client)
        client.events.set(event.name, execute)

        if (event.rest) {
            if (event.once) client.rest.once(event.name, execute)
            else
            client.rest.on(event.name, execute)
        } else {
            if (event.once) client.once(event.name, execute)
            else
            client.on(event.name, execute)
        }

        table.addRow(event.name, "✅")
    })

    return console.log(table.toString(), "\nLoaded Events")
}

module.exports = { loadEvents}