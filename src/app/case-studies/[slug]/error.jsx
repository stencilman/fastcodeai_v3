"use client";

export default function CaseStudyError({ reset }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-[#010821] px-6 text-center text-white mt-[120px]">
      <div className="rounded-full border border-white/10 bg-[#1A2744] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#8AA2CD]">
        Something went wrong
      </div>
      <h2 className="text-2xl font-aeonik md:text-3xl">
        We couldn’t load this case study
      </h2>
      <p className="max-w-lg text-[#9EB3CF]">
        Please try again. If the issue persists, contact our support team so we
        can resolve it quickly.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-[#C6D7F5] transition hover:border-white/30 hover:text-white"
      >
        Try again
      </button>
    </div>
  );
}
