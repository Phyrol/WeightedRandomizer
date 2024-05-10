module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/__tests__/**/*{.ts,.tsx}"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*{.ts,.tsx}",
    "!<rootDir>/dist/**/*",
    "!<rootDir>/node_modules/**/*",
    "!<rootDir>/coverage/**/*",
    "!<rootDir>/**/constants.ts"
  ]
};
