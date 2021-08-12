const Discord = require('discord.js');
const firstMessage = require('./firstMessage')

module.exports = client => {
    const channelID = "875348679979048960"

    // search emoji
    const getEmoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName)

    // get emojis for roles
    const generalEmojis = {
        partay: 'Event Ping',
        blobgift: 'Giveaways',
        pingTicket: 'Movie Night',
        streaming: 'Content Ping',
    }
    const dungeonEmojis = {
        alertexclamation: 'Foot Soldier',
    }
    const LFPEmojis = {
        kianashake: 'Honkai Impact LFP',
        Klee: 'Genshin Impact LFP',
        UwUreaper: 'Overwatch LFP',
        maeve: 'Paladins LFP',
        reaperflag: 'Sea of Thieves LFP',
    }
    const gameEmojis = {
        HonkaiImpact3rd: 'Honkai Impact',
        Paimon: 'Genshin Impact',
        owlogo: 'Overwatch',
        paladins: 'Paladins',
        Sea_Of_Thieves: 'Sea of Thieves',
        minecraft: "Minecraft",
    }

    // create reactions for final message
    const reactions = []
    let emojiText = '• To claim a role, click on the emote associated with the role you want\n\n'

    // general roles
    emojiText += `\n **GENERAL PINGS** \n • Claim your roles to join and contribute for OUR server hypes \n`
    for (const key in generalEmojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const guild = client.guilds.cache.get("743057030100549702");
        const role = guild.roles.cache.find(role => role.name === generalEmojis[key]);
        emojiText += `${emoji} = ${role}\n`
    }
    
    // dungeon roles
    emojiText += `\n **DUNGEON PERMISSION 18+** \n • For those who seek the cursed and horny random contents in here..Please enter at your own risk.. \n`
    for (const key in dungeonEmojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const guild = client.guilds.cache.get("743057030100549702");
        const role = guild.roles.cache.find(role => role.name === dungeonEmojis[key]);
        emojiText += `${emoji} = ${role}\n`
    }
    
    // Looking for party roles
    emojiText += `\n **LOOKING FOR PARTY/CO-OP PINGS** \n • Claim these roles if you're tired of being a loner \n (For those who claim these roles you will most likely receive pings often) \n`
    for (const key in LFPEmojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const guild = client.guilds.cache.get("743057030100549702");
        const role = guild.roles.cache.find(role => role.name === LFPEmojis[key]);
        emojiText += `${emoji} = ${role}\n`
    }
    
    // game roles
    emojiText += `\n **GAME ROLES** \n • If you play these games then react to it\n`
    for (const key in gameEmojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const guild = client.guilds.cache.get("743057030100549702");
        const role = guild.roles.cache.find(role => role.name === gameEmojis[key]);
        emojiText += `${emoji} = ${role}\n`
    }
    


    // construct embed
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`__**Role Claim**__`)
        .setDescription(`${emojiText}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/717586690041970688/802439752417935370/AllJointHatchetfish-max-1mb.gif")
        .setFooter("\u3000".repeat(10/*any big number works too*/)+"")



    // initialize first message with parameters
    firstMessage(client, channelID, exampleEmbed, reactions)

    // redefine all emojis just for handle reaction functio
    const emojis = {
        HonkaiImpact3rd: 'Honkai Impact',
        Paimon: 'Genshin Impact',
        owlogo: 'Overwatch',
        paladins: 'Paladins',
        Sea_Of_Thieves: 'Sea of Thieves',
        minecraft: "Minecraft",
        kianashake: 'Honkai Impact LFP',
        Klee: 'Genshin Impact LFP',
        UwUreaper: 'Overwatch LFP',
        maeve: 'Paladins LFP',
        reaperflag: 'Sea of Thieves LFP',
        alertexclamation: 'Foot Soldier',
        partay: 'Event Ping',
        blobgift: 'Giveaways',
        pingTicket: 'Movie Night',
        streaming: 'Content Ping',
    }

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

