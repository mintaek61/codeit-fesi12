// MSW를 모킹하여 ESM 문제를 방지
export const setupServer = jest.fn(() => ({
  listen: jest.fn(),
  resetHandlers: jest.fn(),
  close: jest.fn(),
  use: jest.fn(),
}));
