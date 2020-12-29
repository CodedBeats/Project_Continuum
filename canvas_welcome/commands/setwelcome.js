const welcomeSchema = require("../models/welcome-schema")


module.exports = {
    requiredPermissions: [
        "ADMINISTRATOR"
    ],
    callback: async (message) => {
        const { guild, channel } = message

        await welcomeSchema.findOneAndUpdate({
            _id: guild.id,
        }, {
            _id: guild.id,
            channelID: channel.id,
        }, {
            upsert: true,
        })

        message.reply("Welcome Channel Set!")
    },
}
