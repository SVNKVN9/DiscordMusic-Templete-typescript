import { NodeOptions } from "erela.js"
import { Bot } from "../../bot"

export = (client: Bot, node: any) => {
    console.log(`Node ${node.options.identifier} connected`)
}