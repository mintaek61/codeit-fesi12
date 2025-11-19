import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom",
  // 테스트 전에 실행할 설정 파일을 지정
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // MSW 모듈을 모킹하여 ESM 문제를 방지
  moduleNameMapper: {
    "^@/mocks$": "<rootDir>/src/__mocks__/mocks.ts",
    "^@/mocks/(.*)$": "<rootDir>/src/__mocks__/$1",
    "^msw/node$": "<rootDir>/src/__mocks__/msw-node.ts",
    "^msw$": "<rootDir>/src/__mocks__/msw.ts",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
