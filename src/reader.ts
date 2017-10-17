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

const DEFAULT_PATH = path.join(__dirname, '../../../');

export class Reader {

    private package: Package;

    constructor(private filePath?: string) {
        this.filePath = path.join(filePath || DEFAULT_PATH, 'package.json');
        this.package = JSON.parse(fs.readFileSync(this.filePath).toString());
    }

    getPackageStream() {
        return fs.createReadStream(this.filePath);
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
