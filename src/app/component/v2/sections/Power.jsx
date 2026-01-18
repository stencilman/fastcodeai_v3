import React from "react";
import Link from "next/link";
import icon1 from "../../../../../public/power/icon1.svg";
import icon2 from "../../../../../public/power/icon2.svg";
import icon3 from "../../../../../public/power/icon3.svg";
import Image from "next/image";

const Power = () => {
  const cards = [
    {
      icon: icon1,
      title: "Co-Creation",
      description:
        "Your domain expertise + our AI. Shared equity, shared outcomes. Best for: New AI-native products, strategic innovation bets",
      href: "/what-we-do/co-creation",
    },
    {
      icon: icon2,
      title: "Platform Deployment",
      description:
        "Proven RAG & data infra solutions. Live in weeks, not years. Best for: Immediate operational impact, proven use cases",
      href: "/what-we-do/platform-development",
    },
    {
      icon: icon3,
      title: "Research-as-a-Service",
      description:
        "Frontier R&D capability on demand. No lab required. Best for: Exploratory research, competitive moats, hard problems",
      href: "/what-we-do/research",
    },
  ];

  return (
    <section className="bg-[#00081F] w-full py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-white mb-6 tracking-tight">
            How We Work With You
          </h2>
          <p className="text-[#9EB3CF] text-lg max-w-2xl mx-auto leading-relaxed">
            Three ways to accelerate your AI journey—choose the engagement model
            that fits your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              aria-label={`${card.title} details`}
              className=" p-6 md:p-10 rounded-[18px] text-center block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:scale-[1.01] transition-transform"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-10 h-32 items-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="w-auto h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#9EB3CF] text-lg  max-w-sm mx-auto">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Power;
