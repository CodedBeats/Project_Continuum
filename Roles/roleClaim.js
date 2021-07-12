const firstMessage = require("./firstMessage");

module.exports = client => {
    const channelID = "857737116985720873"
    const roleChannel = client.channels.fetch(channelID)

    // search emoji
    const getEmoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName)

    // get emojis for roles
    const emojis = {
        coder: 'Psychotic Calculated Coder',
        oblivion: 'Atypical Assistant',
    }

    const reactions = []

    // Define emoji text for message update
    let emojiText = 'Add A Reaction To Claim A Role\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojiText += `${emoji} = ${role}\n`
    }

    firstMessage(client, channelID, emojiText, reactions)

    const handleReaction = (reaction, user, add) => {
        if (user.id === '793390351502802945') {
            return
        }

        // console.log(reaction)
        const emoji = reaction._emoji.name
        const { guild } = reaction.message

        const roleName = emojis[emoji]
        if (!roleName) {
            return
        }

        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)

        if (add) {
            member.roles.add(role)
        } else {
            member.roles.remove(role)
        }
    }

    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelID) {
            handleReaction(reaction, user, true)
        }
    })

    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelID) {
            handleReaction(reaction, user, false)
        }
    })
}