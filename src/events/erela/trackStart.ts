import { PlayerOptions, Track } from "erela.js";
import { Bot } from "../../bot";

export = (client: Bot, player: PlayerOptions, track: any) => {
    const channel: any = client.channels.cache.get(player.textChannel);

    channel.send({ content: `กำลังเล่น: \`${track.title}\`, ขอเพลงโดย \`${track.requester.tag}\`.` });
}