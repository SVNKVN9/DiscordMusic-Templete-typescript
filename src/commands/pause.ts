import { Message } from "discord.js"
import { Bot } from "../bot"

export = {
    name: 'pause',
    async execute(client: Bot, message: Message, args: string[]) {

        if (!message.member?.voice.channel) return
        if (
            message.guild?.me?.voice.channel &&
            message.member.voice.channel.id !== message.guild.me.voice.channel.id
        ) return
        const player = client.manager.players.get(message.guildId)
        player.pause(true)

        message.channel.send({ content: 'หยุดเพลงแล้ว' })
    }
}