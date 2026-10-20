import { SelectedWork } from "@/components/SelectedWork";
import { PreviousExperience } from "@/components/PreviousExperience";
import { WorkWithMe } from "@/components/WorkWithMe";
import { profile } from "@/lib/content";

export default function ClassicPage() {
  return (
    <>
      <header className="mx-6 pt-32 pb-16 md:mx-24 md:pt-40 md:pb-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center 2xl:mx-80">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          {profile.eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-xl">
          {profile.intro}
        </p>
      </header>
      <PreviousExperience />
      <SelectedWork />
      <WorkWithMe />
    </>
  );
}
