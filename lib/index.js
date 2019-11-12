const path = require("path");
const { exec } = require("child_process");
const _ = require("lodash");

class ApkTool {

  static async decompile(source, output) {
    return new Promise(function(resolve, reject){
      if (!_.isString(source)) {
          reject(new Error("Source path must be a string."));
      }

      if (!_.isString(output)) {
          reject(new Error("Output path must be a string"));
      }

      source = path.resolve(source);
      output = path.resolve(output);

      try {
        exec(`apktool decode -c --output=${output} ${source}`, (err) => {
          if (err) return reject(err);
          resolve(output);
        });
      }
      catch(err){
        reject(err);
      }
    });
  }

  static async build(source, output) {
    return new Promise(function(resolve, reject){
      if (!_.isString(source)) {
          reject(new Error("Source path must be a string."));
      }

      if (!_.isString(output)) {
          reject(new Error("Output path must be a string"));
      }

      source = path.resolve(source);
      output = path.resolve(output);

      try {
        exec(`apktool build -c --output=${output} ${source}`, (err) => {
          if (err) return reject(err);
          resolve(output);
        });
      }
      catch(err){
        reject(err);
      }
    });
  }
}

module.exports = ApkTool;
