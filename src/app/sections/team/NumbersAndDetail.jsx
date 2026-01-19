import React from "react";
import Image from "next/image";
import { FileText, Network, TrendingDown, Award } from "lucide-react";
import bgIcon from "../../../../public/team-members/how-we-work-icon.svg";
import icon1 from "../../../../public/team-members/icon1.svg";
import icon2 from "../../../../public/team-members/icon2.svg";
import icon3 from "../../../../public/team-members/icon3.svg";
import icon4 from "../../../../public/team-members/icon4.svg";

const StatCard = ({ icon, value, label }) => (
  <div className="bg-[#000000] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 ">
    <div className="w-12 h-12 flex items-center justify-center ">
      <Image src={icon} alt={label} />
    </div>
    <div>
      <h3 className="text-3xl font-bold font-aeonik text-white mb-1">
        {value}
      </h3>
      <p className="text-[#F3F3F3] font-bwmss01 text-base">{label}</p>
    </div>
  </div>
);

const PrincipleItem = ({ number, title, description }) => (
  <div
    className="border border-white/10 rounded-2xl p-8"
    style={{
      background:
        "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
    }}
  >
    <div className="flex items-center gap-4 mb-4">
      <span className="text-4xl font-light font-aeonik text-white">
        {number}
      </span>
      <h3 className="text-xl font-bold text-white font-aeonik">{title}</h3>
    </div>
    <p className="text-[#9EB3CF] font-bwmss01 leading-relaxed text-sm md:text-base">
      {description}
    </p>
  </div>
);

const NumbersAndDetail = () => {
  const stats = [
    {
      icon: icon1,
      value: "8,000+",
      label: "Academic Citations.",
    },
    {
      icon: icon2,
      value: "400+",
      label: "Pre-Built Connectors.",
    },
    {
      icon: icon3,
      value: "80%",
      label: "Reduction in Data Toil.",
    },
    {
      icon: icon4,
      value: "10+",
      label: "Patents.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Excellence",
      description:
        "How you do anything is how you do everything. If we commit to something, we do it exceptionally well—or we don't do it at all. Life is too short for average work. The best people deserve the best tools, period. Whether it's code, software, or infrastructure, we get what we need to deliver excellence.",
    },
    {
      number: "02",
      title: "Integrity",
      description:
        "This isn't just a corporate buzzword for us. Integrity builds trust. Trust builds relationships. And these relationships last years, even decades. FastCode resonates with this. We tell you the truth about what's working, what's not, and what it will take to get there. No games, no surprises.",
    },
    {
      number: "03",
      title: "Innovation",
      description:
        "Innovation isn't something you can schedule—it's a creative process that happens when it happens. But it remains our North Star. We don't chase innovation for its own sake. We create conditions for it. We hire for it. And we celebrate when it emerges.",
    },
  ];

  return (
    <section className="bg-[#00081F] py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: How We Work */}
          <div
            className="relative border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[500px]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="relative z-10">
              <span className="text-[#9EB3CF] font-bwmss01 text-lg mb-4 block">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-aeonik text-white mb-8 leading-tight">
                The principles that shape everything we do
              </h2>
              <p className="text-[#9EB3CF] font-bwmss01 text-lg max-w-md">
                These aren't words on a wall. They're how we decide who to hire,
                what projects to take, and how we show up every single day
              </p>
            </div>

            {/* Circuit Board Graphic */}
            <div className="absolute bottom-0 right-0 w-full h-[300px] pointer-events-none opacity-50">
              <Image
                src={bgIcon}
                alt="Circuit Board"
                fill
                className="object-contain object-bottom right-0"
              />
            </div>
          </div>

          {/* Right: Principles List */}
          <div className="flex flex-col gap-6">
            {principles.map((principle, index) => (
              <PrincipleItem key={index} {...principle} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9EB3CF] font-bwmss01 text-lg max-w-md text-center mx-auto mt-10">
            These aren't words on a wall. They're how we decide who to hire,
            what projects to take, and how we show up every single day
          </p>
        </div>
      </div>
    </section>
  );
};

export default NumbersAndDetail;
