import { Intents } from 'discord.js';
import 'dotenv/config'
import { Bot } from './bot';

const client = new Bot({
    intents: new Intents( 32767 )
})

client.start()

client.login(process.env.TOKEN)