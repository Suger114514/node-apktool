# node-apktool
A NodeJS wrapper for ApkTool.
## Installation
`npm install --save github:https://github.com/Seyz123/node-apktool`
## Usage
### Decompile an APK
```js
const apktool = require("node-apktool");

apktool.decompile("test.apk", "test").then(dir => {
    console.log("APK has been successfully decompiled.");
}).catch(err => {
    console.error("An error occured while decompiling APK.");
});
```
### Build an APK
```js
const apktool = require("node-apktool");

apktool.build("test", "test.apk").then(dir => {
    console.log("APK has been successfully built.");
}).catch(err => {
    console.error("An error occured while building APK.");
});
```
