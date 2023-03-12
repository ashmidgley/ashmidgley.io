import Link from "next/link";
import Image from "next/image";

export const OtherOfferings = () => {
  return (
    <div className="flex flex-col h-screen justify-center gap-12 sm:gap-24 mx-6 md:mx-24 xl:mx-80">
      <div className="flex flex-row justify-center">
        <p className="text-slate-300 text-lg sm:text-4xl">
          <span>{"I also offer independant programming services. "}</span>
          <span className="text-white font-semibold hover:italic">
            {"Need an extra pair of hands on an existing project? "}
          </span>
          <Link
            href="https://calendly.com/ashmidgley/chat"
            className="text-[#00fd35] underline hover:line-through"
          >
            {"Let's talk"}
          </Link>
          <span>{"."}</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <h2 className="text-center text-md sm:text-xl sm:font-semibold">{`Technologies I'm familiar with...`}</h2>
        <div className="w-full flex justify-center">
          <Image
            src="/images/logo-wall.png"
            alt="Logo Wall"
            width={1340}
            height={253}
            priority
          />
        </div>
      </div>
    </div>
  );
};
