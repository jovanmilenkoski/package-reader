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

    constructor(private filePath: string = DEFAULT_PATH) {
        try {
            this.package = JSON.parse(fs.readFileSync(filePath).toString());
        } catch (e) {
            throw new Error(`unable to read file at location ${this.filePath}`);
        }
    }

    getPackageStream() {
        return fs.createReadStream(this.filePath);
    }

    getVersion(): string {
        return this.package.version;
    }

    /**
     * Removes the scope of the package name. Returns only the name of the package.
     * @returns {string} package name;
     * @memberof Reader
     */
    getName(): string {
        const packageName = this.package.name;
        const nameIsScoped = packageName.indexOf("@") !== -1 && packageName.lastIndexOf("/") !== -1;
        return nameIsScoped ?
            packageName.slice(packageName.lastIndexOf("/") + 1) :
            packageName;
    }

    /**
     * Returns full package name.
     * @returns {string} package name;
     * @memberof Reader
     */
    getFullName(): string {
        return this.package.name;
    }

    getPackage(): Package {
        return this.package;
    }

}
