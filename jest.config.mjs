// jest.config.mjs
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const setupJestConfig = async () => ({
  ...(await createJestConfig(config)()),

  // FIXME: We need this unique way of configuring Jest because `antlr4` dependency is imported strangely. That's
  // why I set it up to be like this.
  transformIgnorePatterns: ['node_modules/(?!(antlr4)/)'],
});

export default setupJestConfig;
