import { Config } from "kalender-events";

export interface CliOptions extends Config {
    argument?: any;
    basicAuth?:string
}