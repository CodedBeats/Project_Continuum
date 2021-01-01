const welcomeSchema = require("../models/welcome-schema")


const cache = new Map()

const loadData = async () => {
    const results = await welcomeSchema.find()

    for (const result of results ) {
        cache.set(result._id, result.channelID)
    }
}
loadData()


module.exports = {
    requiredPermissions: [
        "ADMINISTRATOR"
    ],
    callback: async (message) => {
        const { guild, channel } = message

        await welcomeSchema.findOneAndUpdate(
            {
                _id: guild.id,
            }, 
            {
                _id: guild.id,
                channelID: channel.id,
            }, 
            {
                upsert: true,
            }
        )

        cache.set(guild.id, channel.id)

        message.reply("Welcome Channel Set!")
    },
}

module.exports.getChannelId = (guildId) => {
    return cache.get(guildId)
}
