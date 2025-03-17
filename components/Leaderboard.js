"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

const Leaderboard = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    // API에서 투표 데이터 가져오기
    const fetchVotes = async () => {
      try {
        const res = await fetch("/api/getVotes");
        if (!res.ok) throw new Error("API 요청 실패");

        const data = await res.json();
        setVotes(data.votes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVotes();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Save the Bear 🐻</h2>

      <ul>
        {votes.map((vote, index) => (
          <li
            key={vote.id}
            className={`flex justify-between items-center p-2 ${
              index < 3 ? "bg-blue-100 font-bold" : "bg-white"
            }`}
          >
            <span className="text-lg">{index + 1}. {vote.name}</span>
            <span className="text-gray-600">{vote.count} 🔥</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Button>Enter Contest</Button>
      </div>
    </div>
  );
};

export default Leaderboard;