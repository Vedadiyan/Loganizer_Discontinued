import { Log } from "../logging/Log";
import { LogLevels } from "../logging/LogLevel";

export default interface IApplication {
    get name(): string;
    get id(): string;
    get description(): string;
    on(event: LogLevels, listener: (e: Log) => void): void;
}