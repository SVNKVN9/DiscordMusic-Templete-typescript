export interface InterConfig {
    prefix: string,
    nodes: {
        host: string
        port: number
        password: string
    }[]
}