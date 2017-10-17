import { Reader } from "./reader";

const version = new Reader(__dirname + '/../package.json').getVersion();
console.assert(version, "OK");