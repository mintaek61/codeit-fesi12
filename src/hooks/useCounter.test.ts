// src/hooks/useCounter.test.ts

import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter 테스트", () => {
  // ... 생략

  test("reset 함수가 count 값을 초기값으로 되돌리는지 확인", () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(4);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(3);
  });
});
