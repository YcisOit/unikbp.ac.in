// /app/api/get-university-notices/route.js

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const dbClient = await clientPromise;
    const db = dbClient.db("unikbp");
    const collection = db.collection("collegenotices");

    const notices = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(notices);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error fetching notices" }, { status: 500 });
  }
}
