export interface InterCommand {
    name: string,
    aliases: string[],
    execute: Function
}