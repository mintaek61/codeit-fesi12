// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error("네트워크 응답이 정상적이지 않습니다");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류 발생");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="flex h-screen items-center justify-center">
      <ul>
        {data?.map(item => (
          <li key={item.id} className="mb-2">
            <h3 className="font-bold">
              {item.id}: {item.title}
            </h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
