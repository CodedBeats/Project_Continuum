const Canvas = require("canvas")
const { MessageAttachment } = require("discord.js")
const path = require("path")
const { getChannelId } = require("../commands/setwelcome")

module.exports = (client) => {
    client.on("guildMemberAdd", async (member) => {
        // Async function
        // Destructure the guild property from the member object
        const { guild } = member

        // Access the channel ID for this guild from the cache
        const channelId = getChannelId(guild.id)
        if (!channelId) {
            return
        }

        // Access the actual channel and send the message
        const channel = guild.channels.cache.get(channelId)
        if (!channel) {
            return
        }

        // Create a canvas and access the 2d context
        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext("2d")

        // Load the background image and draw it to the canvas
        const background = await Canvas.loadImage(
            path.join(__dirname, "../background_img_3.jpg")
        )
        let x = 0
        let y = 0
        ctx.drawImage(background, x, y)

        // Load the user's profile picture and draw it
        const pfp = await Canvas.loadImage(
            member.user.displayAvatarURL({
                format: "png"
            })
        )
        x = canvas.width / 2 - pfp.width / 2
        y = 25
        ctx.drawImage(pfp, x, y)

        // Display user text
        ctx.fillStyle = "#ffffff"
        ctx.font = "35px sans-serif"
        let text = `Welcome ${member.user.tag}`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 60 + pfp.height)

        // Display member count
        ctx.font = "30px sans-serif"
        text = `Member #${guild.memberCount}`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 100 + pfp.height)


        // Attach the image to a message and send it
        const attachment = new MessageAttachment(canvas.toBuffer())
        channel.send("", attachment)
    })
}

