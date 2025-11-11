// app/about/page.tsx
"use client";

import * as m from "motion/react-m";
import Link from "next/link";

export default function About() {
  return (
    <>
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About 페이지</h1>
      </m.div>
      <Link className="text-blue-500 underline" href="/">
        홈으로
      </Link>
    </>
  );
}
