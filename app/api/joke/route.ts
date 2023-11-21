import { NextResponse } from "next/server";
import { JokeService } from "../../../services/JokeService";

export async function GET() {
  const jokeService = new JokeService();
  const joke = await jokeService.getJoke();
  return NextResponse.json({ joke: joke, status: 200 });
}
