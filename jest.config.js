module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.less$": "<rootDir>/tests/utils/empty-module.tsx",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  roots: ["<rootDir>"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
