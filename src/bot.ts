import { Client, ClientOptions, Collection } from "discord.js";
import { readdirSync } from 'fs';
import path from 'path';
import { Manager } from "erela.js";
import config from './config'
import { InterConfig } from "./interfaces/config";
import { InterCommand } from "./interfaces/commad";

export class Bot extends Client {
    public commands = new Collection()
    public aliases = new Collection()
    public manager: any
    public config: InterConfig

    constructor(options: ClientOptions) {
        super(options)
        this.config = config
    }

    start() {
        this.commandHandler()
        this.erelaHander()
        this.eventHandler()
    }

    commandHandler() {
        const commandFiles = readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        for(let file of commandFiles) {
            const cmd: InterCommand = require(`./commands/${file}`)
            this.commands.set(cmd.name, cmd)
            if(cmd.aliases) cmd.aliases.forEach((a: any) => this.aliases.set(a, cmd.name))
            console.log(`Command ${cmd.name} Loaded`)
        }
    }

    erelaHander() {
        let client = this
        this.manager = new Manager({
            nodes: this.config.nodes,
            send(id, payload) {
                const guild = client.guilds.cache.get(id);
                if (guild) guild.shard.send(payload);
            },
        })
    }

    eventHandler() {
        const clientEvents = readdirSync(path.join(__dirname, 'events', 'client')).filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        for(let file of clientEvents) {
            const event = require(`./events/client/${file}`)
            let eventName = file.split(".")[0];
            this.on(eventName, event.bind(null, this));
        }
    
        const guildEvents = readdirSync(path.join(__dirname, 'events', 'guild')).filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        for(let file of guildEvents) {
            const event = require(`./events/guild/${file}`)
            let eventName = file.split(".")[0];
            this.on(eventName, event.bind(null, this));
        }
    
        const erelaEvents = readdirSync(path.join(__dirname, 'events', 'erela')).filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        for (const file of erelaEvents) {
            let event = require(`./events/erela/${file}`)
            let eventName = file.split(".")[0];
            this.manager.on(eventName, event.bind(null, this))
        }
    }
}