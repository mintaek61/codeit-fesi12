// MSW를 모킹하여 ESM 문제를 방지
export const http = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
};

export const HttpResponse = {
  json: jest.fn((data, init) => ({ data, ...init })),
  text: jest.fn((text, init) => ({ text, ...init })),
  error: jest.fn(init => ({ ...init, status: 500 })),
};
