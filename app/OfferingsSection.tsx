import { CursorIcon } from "./CursorIcon";

export const OfferingsSection = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-row justify-center">
        <p className="mx-6 md:mx-24 xl:mx-80 text-slate-300 text-4xl">
          <span>{"I build sites "}</span>
          <span className="inline-block">
            <CursorIcon />
          </span>
          <span>{" using "}</span>
          <a
            href="https://www.typescriptlang.org"
            className="text-white font-semibold"
          >
            {"TypeScript"}
          </a>
          <span>{", "}</span>
          <a href="https://nextjs.org" className="text-white font-semibold">
            {"Next.js"}
          </a>
          <span>{" and "}</span>
          <a href="https://vercel.com" className="text-white font-semibold">
            {"Vercel"}
          </a>
          <span>{". Have a big idea but "}</span>
          <a
            href="https://calendly.com/ashmidgley/chat"
            className="text-yellow-300 underline"
          >
            {"don't know where to start?"}
          </a>
          <span>
            {" Together we can coordinate with my network of highly skilled "}
          </span>
          <span className="text-white font-semibold">{"Graphic"}</span>
          <span>{" and "}</span>
          <span className="text-white font-semibold">{"UI/UX designers"}</span>
          <span>{" to take your "}</span>
          <span className="text-green-300 underline">{"vision"}</span>
          <span>{" from "}</span>
          <span className="text-white font-semibold">
            {"idea to inception"}
          </span>
          <span>{"."}</span>
        </p>
      </div>
    </div>
  );
};
