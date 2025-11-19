// MSW를 사용하지 않는 테스트를 위한 모킹 파일
export const server = {
  listen: jest.fn(),
  resetHandlers: jest.fn(),
  close: jest.fn(),
  use: jest.fn(),
};
