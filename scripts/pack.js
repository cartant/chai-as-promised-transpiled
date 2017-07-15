"use strict";

const fs = require("fs");

const original = JSON.parse(fs.readFileSync("./node_modules/chai-as-promised/package.json"));
const transpiled = JSON.parse(fs.readFileSync("./package.json"));

const content = Object.assign({}, transpiled, {
    dependencies: original.dependencies,
    peerDependencies: original.peerDependencies
});
fs.writeFileSync("./package.json", JSON.stringify(content, null, 2));
