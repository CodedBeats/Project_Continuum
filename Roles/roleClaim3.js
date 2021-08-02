const Discord = require('discord.js');
const firstMessage = require('./firstMessage')

module.exports = client => {
    const channelID = "871669518324342784"
    // const roleChannel = client.channels.cache.get(channelID)

    // search emoji
    const getEmoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName)

    // get emojis for roles
    // Mad Lab Emojis
    const emojis = {
        coder: 'Psychotic Calculated Coder',
        oblivion: 'Atypical Assistant',
    }
    
    // velox emojis
    // const emojis = {
    //     valorant: 'valo-pugs',
    //     paladins: 'paladins-pugs',
    //     overwatch: 'ow-pugs',
    //     tv: "movie-ping",
    //     video_game: "content-ping",
    // }

    const reactions = []

    // Define emoji text for message update
    let emojiText = '**To caim a role you click on a reaction emote that belongs to the role you desire.**\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        // const role = emojis[key]
        const guild = client.guilds.cache.get("731399692868649030");
        const role = guild.roles.cache.find(role => role.name === emojis[key]);
        emojiText += `${emoji} = ${role}\n`
    }
    


    // construct embed
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`__**COME GETCHA ROLES**__`)
        .setDescription(`${emojiText}`)
        .setThumbnail('https://i.pinimg.com/originals/78/a9/6d/78a96d96ffa60a4477d0f17e9bd55a36.png')



    // initialize first message with parameters
    firstMessage(client, channelID, exampleEmbed, reactions)

    // initialize message
    // client.on('message', message => {
    //     if (message.content.toLocaleLowerCase() === ">>roles") {
    //         roleChannel.send(exampleEmbed).then((message) => {
    //             addReactions(message, reactions)
    //         })
    //     }
    // })

    // function for adding and removing roles
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

    // add role
    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelID) {
            handleReaction(reaction, user, true)
        }
    })
    // remove role
    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelID) {
            handleReaction(reaction, user, false)
        }
    })

}