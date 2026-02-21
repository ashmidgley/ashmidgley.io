import { GeoBuffSummary } from "./GeoBuffSummary";
import { NomadsSummary } from "./NomadsSummary";

export const SelectedWork = () => {
  return (
    <section className="mx-6 py-24 md:mx-24 md:py-32 xl:mx-24 2xl:mx-80">
      <div className="mb-10 sm:mb-12">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Case Studies
        </p>
        <h2 className="text-2xl font-semibold sm:text-4xl">Selected Work</h2>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-lg">
          A few projects that show how I approach product delivery, from early
          MVPs through to scalable production systems.
        </p>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8">
        <GeoBuffSummary />
        <NomadsSummary />
      </div>
    </section>
  );
};
