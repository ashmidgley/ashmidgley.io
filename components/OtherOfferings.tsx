import { LogoWall } from "./LogoWall";

export const OtherOfferings = () => {
  return (
    <div className="flex flex-col h-screen justify-center gap-24">
      <div className="flex flex-row justify-center">
        <p className="text-slate-300 text-lg sm:text-4xl">
          <span>{"I also offer independant programming services. "}</span>
          <span className="text-white font-semibold hover:italic">
            {"Need an extra pair of hands on an existing project? "}
          </span>
          <a
            href="https://calendly.com/ashmidgley/chat"
            className="text-yellow-300 underline hover:line-through"
          >
            {"Let's talk"}
          </a>
          <span>{"."}</span>
        </p>
      </div>
      <div>
        <h2 className="text-center text-lg font-semibold">{`Technologies I'm familiar with...`}</h2>
        <div className="w-full flex justify-center">
          <LogoWall />
        </div>
      </div>
    </div>
  );
};
