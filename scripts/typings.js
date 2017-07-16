"use strict";

const fs = require("fs");

let content = fs.readFileSync("./node_modules/@types/chai-as-promised/index.d.ts").toString();
content = content.replace(/declare module 'chai-as-promised'/, "declare module 'chai-as-promised-transpiled'");
fs.writeFileSync("./dist/index.d.ts", content);
