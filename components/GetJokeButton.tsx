import React, { FC } from "react";

interface Props {
  onGetJoke: () => void;
}

export const GetJokeButton: FC<Props> = ({ onGetJoke }) => (
  <button
    className="text-left underline hover:line-through"
    onClick={onGetJoke}
  >
    Get Joke
  </button>
);
