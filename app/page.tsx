import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/sections/Process";
import { SkillsTools } from "@/components/sections/SkillsTools";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <SelectedWork />
      <Process />
      <SkillsTools />
      <About />
      <ContactCTA />
    </>
  );
}
