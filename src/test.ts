import { Reader } from "./reader";

const version = new Reader(__dirname + '/../').getVersion();
console.assert(version, "OK");