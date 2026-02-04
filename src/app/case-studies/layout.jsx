import Link from "next/link";
import Footer from "../sections/Footer";
import MoreBreakthroughs from "./MoreBreakthroughs";

export const metadata = {
  title: "Case Studies",
  description:
    "Explore Fast Code AI case studies highlighting AI-driven impact across industries.",
};

export default function CaseStudiesLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B1F] text-white">
      {/* <header className="relative z-10 border-b border-white/10 bg-[#010D2C]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8AA2CD]">
              Case Studies
            </p>
            <h1 className="mt-2 text-3xl font-aeonik md:text-4xl">
              Transforming industries with AI
            </h1>
            <p className="mt-3 max-w-2xl text-base text-[#9EB3CF]">
              Deep dives into how our teams deliver production-ready AI systems
              that solve high-stakes problems for enterprises worldwide.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C6D7F5] transition hover:border-white/30 hover:text-white"
          >
            View all work
            <span aria-hidden className="text-lg">
              →
            </span>
          </Link>
        </div>
      </header> */}
      <main className="relative z-10 ">{children}</main>
      {/* <MoreBreakthroughs /> */}
      {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050B1F] via-[#040A1D] to-[#020718]" /> */}
      <div className="relative z-10">
        <Footer showExtraSpace={false} />
      </div>
    </div>
  );
}
