import { Log } from "../logging/Log";
import { LogLevels } from "../logging/LogLevel";

type ReadOptions = {
    from: Date,
    to: Date,
    logLevels: LogLevels[],
    labels: string[],
    groups: string[]
}

export default interface ILogger {
    sink(log: Log): void;
    read(readOptions: ReadOptions): Log[];
}