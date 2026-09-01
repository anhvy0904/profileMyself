import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Achievements } from "@/components/sections/Achievements";
import { InternationalActivity } from "@/components/sections/InternationalActivity";
import { Education } from "@/components/sections/Education";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { FutureDirection } from "@/components/sections/FutureDirection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me & Values */}
      <About />

      {/* 3. Skills & Technology Stack */}
      <Skills />

      {/* 4. Selected Projects */}
      <Projects />

      {/* 5. Journey / Timeline */}
      <Journey />

      {/* 6. Achievements & Certifications */}
      <Achievements />

      {/* 7. International Experience */}
      <InternationalActivity />

      {/* 8. Education */}
      <Education />

      {/* 9. Beyond Code */}
      <BeyondCode />

      {/* 10. Future Direction */}
      <FutureDirection />

      {/* 11. Contact */}
      <Contact />
    </main>
  );
}
