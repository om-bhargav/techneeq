"use client";

import NetworkBackground from "./NetworkBackground";

export default function GalaxySection() {
  return (
    <section className="relative h-screen bg-[#012526]">
      <NetworkBackground
        className="fixed inset-0 z-[-1] h-screen w-screen outline-none"
        colors={["#20B2AA", "#7FFFD4", "#006D6F"]}
      />

      <div className="relative z-10">
        {/* Your section content */}
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="text-5xl font-display uppercase tracking-wider text-white">
            Neural Network
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-center text-white/60">
            Hover over the nodes to see them expand. The background stays fixed as
            you scroll.
          </p>
        </div>
      </div>
    </section>
  );
}
