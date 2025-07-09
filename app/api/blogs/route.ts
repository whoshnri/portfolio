import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://quilled-5su6.onrender.com/get/blog/username/thebigboss");

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch blogs from backend' },
        { status: res.status }
      );
    }

    const blogs = await res.json();
    return NextResponse.json({ results: blogs });
  } catch (error) {
    if(error instanceof Error){
      return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
    }

  }
}
