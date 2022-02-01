const Discord = require("discord.js")
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

const {BotToken} = process.env

BotClient.on("ready", () => {
    console.log("bot is now ready")
})

BotClient.on("messageCreate", (Message) => {
    if (Message.author.bot) {
        return
    }

    const {Auther, Content} = Message

    if (Content == "ping") {
        Message.reply("pong")
    }
})


BotClient.login(BotToken)
