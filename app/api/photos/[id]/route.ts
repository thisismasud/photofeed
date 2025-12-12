import { getPhotoById } from "@/lib/image_data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const photo = getPhotoById(id);
  return NextResponse.json(photo, { status: 200 });
}
