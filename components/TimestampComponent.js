"use client"; // Next.js 15+에서는 클라이언트 전용 컴포넌트 명시

import { useState, useEffect } from "react";

export default function TimestampComponent() {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    setTimestamp(Date.now()); // 클라이언트에서만 실행됨
  }, []);

  return <p>현재 시간: {timestamp}</p>;
}