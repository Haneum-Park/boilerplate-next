const nextJest = require('next/jest');
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@page/(.*)$': '<rootDir>/pages/$1',
    '^@atom/(.*)$': '<rootDir>/components/atoms/$1',
    '^@molecule/(.*)$': '<rootDir>/components/molecules/$1',
    '^@organism/(.*)$': '<rootDir>/components/organisms/$1',
    '^@template/(.*)$': '<rootDir>/components/templates/$1',
    '^@store/(.*)$': '<rootDir>/stores/$1',
    '^@util/(.*)$': '<rootDir>/utils/$1',
    '^@const/(.*)$': '<rootDir>/consts/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

// module.exports = nextJest(customJestConfig);

// const nextJest = require('next/jest');
// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//     '^@comp/(.*)$': '<rootDir>/components/$1',
//     '^@page/(.*)$': '<rootDir>/pages/$1',
//   },
//   testEnvironment: 'jest-environment-jsdom',
// };

const createJestConfig = nextJest(customJestConfig);

module.exports = createJestConfig(customJestConfig);
