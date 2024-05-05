import * as fs from "fs";
import { KEY_TO_WEIGHT_MAP } from "./types";
import { OVERWATCH_ROLES } from "./constants";

const WEIGHTED_FILE_NAME = "src/assets/weights.json";

const intializeKeysWithWeights = (keys: string[]): KEY_TO_WEIGHT_MAP => {
  const result: KEY_TO_WEIGHT_MAP = {};

  keys.forEach((key) => {
    result[key] = 1;
  });

  return result;
};

const updateWeights = (allKeys: string[], selectedKey: string, map: KEY_TO_WEIGHT_MAP): void => {
  allKeys.forEach((key) => {
    if (key === selectedKey) {
      map[key] = 1;
    } else {
      map[key]++;
    }
  });
};

const readAndWriteData = (data?: Buffer) => {
  const desiredKeys = Object.values(OVERWATCH_ROLES);
  let weightedMap: KEY_TO_WEIGHT_MAP = data ? JSON.parse(data.toString()) : intializeKeysWithWeights(desiredKeys);
  console.log("Current weights: ", weightedMap);

  const allWeights = Object.values(weightedMap)
    .map((weight, index) => Array(weight).fill(index))
    .flat();

  let rnd = Math.floor(Math.random() * allWeights.length);

  const indexToUse = allWeights[rnd];
  const result = Object.keys(weightedMap)[indexToUse];

  updateWeights(desiredKeys, result, weightedMap);
  console.log("New weights: ", weightedMap);

  fs.writeFileSync(WEIGHTED_FILE_NAME, JSON.stringify(weightedMap));

  console.log("Result: ", result);
};

const generateChoice = () => {
  try {
    const file = fs.readFileSync(WEIGHTED_FILE_NAME);
    console.log("Found existing data");
    readAndWriteData(file);
  } catch (e) {
    console.log("Did not find existing data. Creating new data...");
    readAndWriteData();
  }
};

const init = () => {
  generateChoice();
};

init();
