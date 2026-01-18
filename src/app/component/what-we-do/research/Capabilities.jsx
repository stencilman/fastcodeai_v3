import React from "react";
import Image from "next/image";
import capabilitiesImage from "../../../../../public/what-we-do/research/capabilities.png";

const cards = [
  {
    id: "01",
    title: "Feasibility Studies",
    description:
      '"Can AI actually solve this?" We conduct rapid literature reviews and initial experiments to validate a problem is solvable before you invest millions.',
  },
  {
    id: "02",
    title: "Novel Algorithm Design",
    description:
      "When off-the-shelf models fail, we build custom architectures. From geometric deep learning to specialized reinforcement learning agents.",
  },
  {
    id: "03",
    title: "Model Fine-Tuning & Optimization",
    description:
      "We adapt state-of-the-art (SOTA) open-source models (Llama, Mistral, Stable Diffusion) to your specific domain data, maximizing performance while minimizing compute costs.",
  },
  {
    id: "04",
    title: "Benchmarking & Validation",
    description:
      "Rigorous testing of your existing models against industry baselines to prove efficacy and safety.",
  },
];

const Capabilities = () => {
  return (
    <section className="bg-[#00081F] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A1329] border border-white/10 lg:row-span-2">
            <div className="relative z-10 p-6 md:p-8 max-w-[320px]">
              <h3 className="text-2xl md:text-3xl font-medium text-white font-aeonik leading-tight">
                Exploratory
                <br />
                Capabilities
              </h3>
              <p className="mt-4 text-sm md:text-base text-[#9EB3CF] leading-relaxed font-bwmss01">
                We bridge the gap between academic research and industrial
                application.
              </p>
            </div>
            <div className="absolute inset-0">
              <Image
                src={capabilitiesImage}
                alt="Exploratory capabilities"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1329]/90 via-transparent to-[#0A1329]/80" />
          </div>

          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl border border-white/10 px-6 py-6 md:px-7 md:py-7"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <div className="absolute top-0 left-5 text-[90px] font-semibold text-[#77A0FF] opacity-15">
                {card.id}
              </div>
              <h4 className="text-2xl md:text-3xl font-medium text-white font-aeonik leading-snug my-7 mt-11">
                {card.title}
              </h4>
              <p className=" text-lg text-[#9EB3CF] leading-relaxed font-bwmss01">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
