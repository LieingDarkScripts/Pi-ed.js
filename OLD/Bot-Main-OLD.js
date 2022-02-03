const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const BotClient = new Discord.Client({
    intents: ["GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILD_SCHEDULED_EVENTS",
    ]
})

const { BotToken } = process.env
const BotChar = "!"

var LogCount = 1

function QLog(LogMessage) {
    console.log(`Log: ${LogCount}; Message: ${LogMessage}`)
    LogCount += 1
}

BotClient.on("messageCreate", (Message) => {
    QLog(`work you better; ${Message.content}`)
    const { content, author, bot, guild, reply } = Message
    if (bot || !content.startsWith(BotChar)) {
        QLog(`stopping because of either  bot:${bot} or msg:${!content.startsWith(BotChar)}`)
        return
    }

    const CommandString = content.substring(1)

    if (CommandString == "ping") {
        Message.reply("PONG!")
    }
   

    if (CommandString == "init") {
        QLog("start")
        QLog()
        var EditLog = "```\n"
        Message.reply("init'ing")
        QLog("start")
        QLog()

        const Channels = guild.channels.cache.forEach((abc) => {
            if (abc.id == Message.channel.id) {
                return
            }
            QLog(abc.name)
           EditLog = EditLog.concat(`\n Delete: ${abc.name}; ${abc.id}`)
           abc.delete()

        })
        QLog("finished iteration")
        EditLog = EditLog.concat("\n```")
        QLog()
        Message.reply(EditLog)




    }

    if (CommandString == "makechannel") {
        const NewChannel = Message.guild.channels.create(`${author.username}`, {reason: "because"})
       const NewEmbed = new MessageEmbed()
            .setColor('#03fc03')
            .setTitle("Channel creation requested")
            .setURL(Message.url)
            .addFields(
                {name: "Requested by:", value: `<@${author.id}>`},
                {name: "requested at", value: `at ${Message.createdAt.toString()}`}
            )
        NewChannel.then((CreatedChannel) => {
            CreatedChannel.send({embeds: [NewEmbed]})
        })
    }

    if (CommandString == "break") {
        null.null = null
    }
    console.log(CommandString == "getstr")
    if (CommandString == "getstr") {
       guild.members.fetch(author).then((Member) => {
        var flags = `\`\`\`\n ${author.username.toUpperCase()} FLAGS:\n` // 2 "\n" on purpose (would reslt in 2, next one also starts with "\n")
        const MemberCount = Member.permissions.toArray().length
        Member.permissions.toArray().forEach((FlagString, Index) => {
            flags += `\n     FLAG: ${FlagString}${(!Index == MemberCount) & "," || ""}`
        })
         flags += "```"
         Message.reply(flags)
       })
       
    }




})
BotClient.on("ready", () => {
    QLog("Bot is now ready")
})

QLog(BotToken)


BotClient.on("messageCreate", (Message) => {
    if (Message.author.bot) {
        QLog("removing because of bot")
        return
    }

    const { Auther, content } = Message



})



QLog("Set message create")



BotClient.login(BotToken)

QLog("test")

QLog(`Logged in, with token of: ${BotToken}`)
