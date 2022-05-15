import { Message } from "discord.js";
import { Bot } from "../bot";

export = {
    name: 'play',
    aliases: ['p'],
    async execute(client: Bot, message: Message, args: string[]) {
        if (!message.member?.voice.channel) return message.channel.send({ content: 'เข้าห้องเสียงก่อน' })
        if (
            message.guild?.me?.voice.channel &&
            message.member.voice.channel.id !== message.guild.me.voice.channel.id
        ) return

        const res = await client.manager.search(
            args.join(" "),
            message.author
        );

        const player = client.manager.create({
            guild: message.guild?.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
        });

        player.connect();

        if (res.loadType == 'PLAYLIST_LOADED') {
            player.queue.add(res.tracks)
        } else {
            player.queue.add(res.tracks[0]);
        }

        if (
            !player.playing &&
            !player.paused &&
            !player.queue.size
        ) return player.play();

        if (
            !player.playing &&
            !player.paused &&
            player.queue.totalSize === res.tracks.length
        ) return player.play();

    }
}