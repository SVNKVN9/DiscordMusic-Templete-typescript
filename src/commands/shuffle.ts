import { Message } from "discord.js"
import { Bot } from "../bot"

module.exports = {
    name: 'shuffle',
    execute(client: Bot, message: Message, args: string[]) {

        if (!message.member?.voice.channel) return
        if (
            message.guild?.me?.voice.channel &&
            message.member.voice.channel.id !== message.guild.me.voice.channel.id
        ) return
        const player = client.manager.players.get(message.guildId)

        player.queue.shuffle();

        message.channel.send({ content: 'shuffle แล้ว' })
    }
}