import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '**/*.tsx',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/.storybook/**',
    '!src/components/molecules/TsParticles.tsx',
    '!src/app/**',
    '!src/domain/**',
    '!src/hooks/**',
    '!src/stories/**',
    '!src/types/**',
  ],
  coverageDirectory: 'coverage_dir',
  coverageReporters: ['html'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^swiper/css.*$': '<rootDir>/__mocks__/swiper.css',
  },
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  verbose: true,
};

export default config;
