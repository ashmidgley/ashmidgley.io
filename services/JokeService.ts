import { Joke } from "../types/joke";

export interface JokeServiceInterface {
  getJoke: () => Promise<Joke>;
}

export class JokeService implements JokeServiceInterface {
  constructor() {}

  async getJoke(): Promise<Joke> {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    return await response.json();
  }
}
