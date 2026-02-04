import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-[#010821] px-6 text-center text-white">
      <div className="rounded-full border border-white/10 bg-[#1A2744] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#8AA2CD]">
        Case study unavailable
      </div>
      <h2 className="text-2xl font-aeonik md:text-3xl">
        We couldn’t find that case study
      </h2>
      <p className="max-w-lg text-[#9EB3CF]">
        The case study you’re looking for may have moved or been removed. Head
        back to our full library to continue exploring our work.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/case-studies"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-[#C6D7F5] transition hover:border-white/30 hover:text-white"
        >
          Browse case studies
        </Link>
        <Link
          href="/portfolio"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-[#C6D7F5] transition hover:border-white/30 hover:text-white"
        >
          View all work
        </Link>
      </div>
    </div>
  );
}
