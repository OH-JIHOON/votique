// app/api/addVote/route.js
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, options } = body;
    
    const docRef = await addDoc(collection(db, "votes"), {
      title,
      options,
      createdAt: new Date(),
    });

    return Response.json({ message: "Vote created!", id: docRef.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}