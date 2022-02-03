const Discord = require("discord.js")
const {MessageEmbed} = Discord



const {BotToken} = process.env // what ever env varibles you set form heroku

const Intents = ["GUILDS",
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


const BotClient = new Discord.Client({intents: intents})
const BotChar = "!"

