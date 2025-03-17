"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch("/api/getVotes");
        if (!res.ok) throw new Error("API 요청 실패");
        const data = await res.json();
        setVotes(data.votes);
      } catch (error) {
        console.error("투표 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchVotes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-4">Votique</h1>
      <h2 className="text-xl font-semibold mb-2">투표 목록</h2>

      {votes.length === 0 ? (
        <p className="text-gray-500">투표가 없습니다. 새로운 투표를 추가해주세요!</p>
      ) : (
        <ul className="bg-white shadow-md rounded-lg p-4 w-1/2">
          {votes.map((vote) => (
            <li key={vote.id} className="border-b py-2 text-lg">
              {vote.option} - {new Date(vote.timestamp.seconds * 1000).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}