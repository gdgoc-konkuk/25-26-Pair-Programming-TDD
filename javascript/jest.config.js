export default {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: [
    'bowlingGame.js',
    '!node_modules/**',
  ],
};
