# package-reader

### Install
npm install package-reader --save

### Typescript
```
import defaultReader from "./index";
const version = defaultReader.getVersion();
console.log(version);
```

or 

```
import { Reader } from "./reader";
const reader = new Reader(<path to a package.json>);
const version = reader.getVersion();
console.log(version);
```
