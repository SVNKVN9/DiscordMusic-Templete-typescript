import { PlayerOptions } from "erela.js";
import { Bot } from "../../bot";

export = (client: Bot, player: PlayerOptions) => {
    const channel: any = client.channels.cache.get(player.textChannel);

    channel.send({ content: 'ตัดการเชื่อมต่อแล้ว' });
}