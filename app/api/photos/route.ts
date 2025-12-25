import { getAllPhotos } from "@/lib/image_data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = getAllPhotos();
  return NextResponse.json(data, { status: 200 });
}
