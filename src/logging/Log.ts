import { LogLevels } from "./LogLevel";

export type Log = {
    logLevel: LogLevels,
    id: string,
    timestamp: Date,
    application: string,
    domain: string,
    group: string,
    labels: string[],
    message: string,
    stackTrace: string,
    parameters: { [key: string]: any }[]
}