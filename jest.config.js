export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'], // Look for tests in `test/`
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.(ts|js)', '**/?(*.)+(spec|test).(ts|js)'],
  testPathIgnorePatterns: ["/node_modules/"],
  globals: {
    'ts-jest': {
      useESM: true, // Enable ESM support
    },
  },
};