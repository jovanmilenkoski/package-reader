import path = require("path");
import fs = require("fs");

export interface Dictionary<T> {
    [key: string]: T
}

export interface Package {
    name: string
    version: string
    description: string
    engines: Dictionary<string>
    dependencies: Dictionary<string>
    devDependencies: Dictionary<string>
}

const DEFAULT_PATH = path.join(__dirname, '..', '..', '..', 'package.json');

export class Reader {

    private package: Package;

    constructor(private filePath?: string) {
        this.package = JSON.parse(fs.readFileSync(filePath || DEFAULT_PATH).toString());
    }

    getPackageStream() {
        return fs.createReadStream(DEFAULT_PATH);
    }

    getVersion(): string {
        return this.package.version;
    }

    getName(): string {
        return this.package.name;
    }

    getPackage(): Package {
        return this.package;
    }

}
