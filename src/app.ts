import * as fs from "fs/promises";
import { KEY_TO_WEIGHT_MAP } from "./types";
import { OVERWATCH_ROLES } from "./constants";

const WEIGHTED_FILE_NAME = "src/assets/weights.json";
const FILE_NOT_FOUND_ERR_CODE = "ENOENT";

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

const readAndWriteData = async (data?: Buffer) => {
  const desiredKeys = Object.values(OVERWATCH_ROLES);
  const weightedMap: KEY_TO_WEIGHT_MAP = data ? JSON.parse(data.toString()) : intializeKeysWithWeights(desiredKeys);
  console.log("Current weights: ", weightedMap);

  const allWeights = Object.values(weightedMap).reduce(
    (accumulatedWeight, weight, index) => accumulatedWeight.concat(Array<number>(weight).fill(index)),
    [] as number[]
  );

  const rnd = Math.floor(Math.random() * allWeights.length);

  const indexToUse = allWeights[rnd];
  const result = Object.keys(weightedMap)[indexToUse];

  updateWeights(desiredKeys, result, weightedMap);
  console.log("New weights: ", weightedMap);

  await fs.writeFile(WEIGHTED_FILE_NAME, JSON.stringify(weightedMap));

  console.log("Result: ", result);
};

const generateChoice = async () => {
  try {
    const file = await fs.readFile(WEIGHTED_FILE_NAME);
    console.log("Found existing data");

    readAndWriteData(file);
  } catch (err) {
    if (err.code === FILE_NOT_FOUND_ERR_CODE) {
      console.log("Did not find existing data. Creating new data...");
      readAndWriteData();
    } else {
      console.log("Failed to open or create file: ", err);
    }
  }
};

const init = () => {
  generateChoice();
};

//init();
