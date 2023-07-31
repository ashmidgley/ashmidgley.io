import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  type: "error" | "info";
  message: string;
}

export const Banner: FC<Props> = ({ type, message }) => {
  return (
    <div
      className={clsx(
        "flex fixed z-50 gap-8 py-3 px-4 w-full border-2 rounded",
        {
          "bg-red-300 border-red-500": type === "error",
          "bg-blue-300 border-blue-600": type === "info",
        }
      )}
    >
      <p
        className={clsx("text-lg", {
          "text-black": type === "error",
          "text-blue-500": type === "info",
        })}
      >
        {message}
      </p>
    </div>
  );
};
