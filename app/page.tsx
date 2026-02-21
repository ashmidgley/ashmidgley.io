import { SelectedWork } from "@/components/SelectedWork";
import { PreviousExperience } from "@/components/PreviousExperience";
import { WorkWithMe } from "@/components/WorkWithMe";

export default function Home() {
  return (
    <>
      <PreviousExperience />
      <SelectedWork />
      <WorkWithMe />
    </>
  );
}
