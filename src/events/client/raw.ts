import { Bot } from "../../bot";

export = (client: Bot, d: any) => {
    client.manager.updateVoiceState(d);
}