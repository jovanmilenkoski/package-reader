import { Reader } from "./index";
import * as path from "path";

const packageJSONPath = path.join(__dirname, '../package.json');
console.log(packageJSONPath);

const packageRead = new Reader(packageJSONPath);

const version = packageRead.getVersion();
const name = packageRead.getName();
const fullName = packageRead.getFullName();
console.assert(!!version, "OK");
console.assert(name === fullName, "OK");
