"use client";

import Link from "next/link";
import { caseStudies } from "../data/caseStudiesData";

const CaseStudyCard = ({ caseStudy }) => {
  const { hero, slug } = caseStudy;
  const stats = hero?.meta || [];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#04112F] shadow-[0_24px_80px_rgba(2,11,33,0.55)] transition-transform duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-[#102142]/80 via-transparent to-[#06112C]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-8 p-8 md:flex-row md:p-12">
        <div className="flex-1 space-y-5">
          <div className="flex flex-wrap gap-3">
            {hero?.badges?.map((badge, idx) => (
              <span
                key={idx}
                className={`rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-wider text-[#9EB3CF]`}
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-aeonik text-white md:text-[38px] tracking-wide">
              {hero?.title}
            </h2>
            <p className="max-w-3xl text-base text-[#9EB3CF] md:text-lg">
              {hero?.subtitle}
            </p>
          </div>
          {stats.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8AA2CD]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base text-white md:text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          )}
          <Link
            href={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-[#C6D7F5] transition group-hover:border-white/30 group-hover:text-white"
          >
            View case study
            <span aria-hidden className="text-lg">
              →
            </span>
          </Link>
        </div>

        <div className="relative flex w-full max-w-sm shrink-0 items-end justify-center">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2DC1C3]/10 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-[#0268F2]/10 blur-3xl" />
          <div className="relative w-full max-w-[320px] rounded-[28px] border border-white/10 bg-[#020C26] p-4 shadow-[0_20px_80px_rgba(3,19,55,0.6)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#071634]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#020C26]/40 to-[#020C26]/60" />
              {hero?.image && (
                <div
                  className="absolute inset-3 rounded-lg border border-white/10 bg-center bg-cover"
                  style={{ backgroundImage: `url(${hero.image.src})` }}
                />
              )}
            </div>
            <div className="mt-5 space-y-3 text-xs text-[#9EB3CF]">
              <div className="flex items-center justify-between">
                <span>Team</span>
                <span>
                  {stats.find((item) => item.label === "Team")?.value}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span>
                  {stats.find((item) => item.label === "Duration")?.value}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Launch</span>
                <span>
                  {stats.find((item) => item.label === "Launch")?.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function CaseStudyList() {
  return (
    <div className="relative mx-auto flex flex-col gap-10 px-24 mt-[120px]">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  );
}
