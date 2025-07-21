import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const date = formData.get("date");
  const file = formData.get("file");

  if (!title || !date || !file) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), "public", "uploads", file.name);
  await writeFile(filePath, buffer);

  const dbClient = await clientPromise;
  const db = dbClient.db("unikbp");
  const collection = db.collection("universitynotices");

  await collection.insertOne({
    title,
    date,
    filePath: `/uploads/${file.name}`,
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "Notice uploaded successfully" });
}
