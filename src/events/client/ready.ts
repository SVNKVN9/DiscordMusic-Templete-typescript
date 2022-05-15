import { Bot } from "../../bot";

export = (client: Bot) => {
    console.log(`${client.user?.tag} has ready`)

    client.manager.init(client.user?.id);
}