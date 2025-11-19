// src/app/page.test.tsx

import { render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "./page";

// axios를 모킹합니다
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("MSW 모킹 테스트", () => {
  test("fetch API 모킹 테스트", async () => {
    // axios.get을 모킹하여 MSW에서 설정한 데이터를 반환하도록 설정
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        id: 1,
        title: "첫 번째 게시글",
        body: "내용 1",
      },
    });

    render(<Home />);

    const postListItems = await screen.findAllByRole("listitem");
    // MSW에 모킹된 데이터는 1개 (posts/1 엔드포인트)
    expect(postListItems).toHaveLength(1);

    // MSW에서 설정한 결과값이 화면에 잘 나오는지 확인
    expect(screen.getByText("1: 첫 번째 게시글")).toBeInTheDocument();
  });

  // test("네트워크 에러 발생 시 모킹 테스트", async () => {
  //   server.use(
  //     http.get("http://localhost:4000/posts/1", () => {
  //       return HttpResponse.json(null, { status: 500 });
  //     }),
  //   );

  //   render(<Home />);
  //   const errorMessage = await screen.findByText(
  //     "서버에서 데이터를 가져오는 데 실패했습니다.",
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
