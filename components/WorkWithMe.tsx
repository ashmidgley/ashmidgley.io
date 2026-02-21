import Link from "next/link";

export const WorkWithMe = () => {
  return (
    <section className="mx-6 pb-24 md:mx-24 md:pb-32 xl:mx-24 2xl:mx-80">
      <div className="rounded-xl border border-white/15 bg-[#171616] p-6 text-center sm:p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Let&apos;s Build
        </p>
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Want to work with me?
        </h2>
        <p className="mt-4 text-sm text-slate-300 sm:text-lg">
          Get in touch at{" "}
          <Link
            href="mailto:ashleymidgley@gmail.com"
            className="text-[#00fd35] underline hover:line-through"
          >
            ashleymidgley@gmail.com
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
