"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var constants_1 = require("./constants");
var crypto_1 = require("crypto");
var FILE_NAME = "weights.json";
var intializeKeysWithWeights = function (keys) {
    var result = {};
    keys.forEach(function (key) {
        result[key] = 0;
    });
    console.log("result: ", result);
    return result;
};
var readFileFn = function (data) {
    console.log("data: ", data);
    if (data) {
        console.log("data: ", data);
        console.log("datajosn: ", data.toJSON());
    }
    else {
        console.log("initializing map");
        var desiredKeys = Object.values(constants_1.OVERWATCH_ROLES);
        var weightedMap_1 = intializeKeysWithWeights(desiredKeys);
        var rnd = (0, crypto_1.randomInt)(desiredKeys.length);
        console.log("rnd: ", rnd);
        var result_1 = desiredKeys[rnd];
        console.log("result: ", result_1);
        desiredKeys.forEach(function (key) {
            if (key === result_1) {
                weightedMap_1[key] = 0;
            }
            else {
                weightedMap_1[key]++;
            }
        });
        console.log("increased weights: ", weightedMap_1);
    }
};
var getFile = function () {
    try {
        var file = fs.readFileSync(FILE_NAME);
        readFileFn(file);
    }
    catch (e) {
        console.log("no existing data");
        readFileFn();
    }
};
var init = function () {
    getFile();
};
init();
//# sourceMappingURL=app.js.map