/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  preset: 'ts-jest/presets/default-esm',

  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],
  moduleFileExtensions: ['js', 'mts'],

  resolver: '<rootDir>/mjs-resolver.ts',
  testMatch: ['**/__tests__/**/*.m[jt]s?(x)', '**/?(*.)+(spec|test).m[tj]s?(x)'],

  transform: {
    '^.+\\.mtsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: 'tsconfig-esm.json',
        useESM: true,
      },
    ],
  },
}

export default jestConfig
