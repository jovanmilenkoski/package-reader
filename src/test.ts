import { Reader } from "./reader";
import defaultReader from "./index";

const packageRead = new Reader(__dirname + '/../package.json');

const version = packageRead.getVersion();
const name = packageRead.getName();
const fullName = packageRead.getFullName();
console.assert(!!version, "OK");
console.assert(name === fullName, "OK");
