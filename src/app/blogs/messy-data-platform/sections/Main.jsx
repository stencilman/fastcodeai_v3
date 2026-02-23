"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. The Problem" },
  { id: "topic2", label: "2. The Human Bottleneck" },
  { id: "topic3", label: "3. Why This Problem Is Deceptively Hard" },
  { id: "topic4", label: "4. The Solution" },
  { id: "topic5", label: "5. The Model Stack" },
  { id: "topic6", label: "6. The Results" },
  { id: "topic7", label: "7. What We Learned" },
  { id: "topic8", label: "8. What's Next" },
];

const RECOMMENDED_SLUGS = ["flexa", "hardware-limitation", "swiglu"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* Intro */}
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Ever tried buying… {'"Coc Col 12pk"'}?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Confusing, right?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A computer will file it, store it, list it, and serve it to a
              customer searching for Coca-Cola Classic 12-Pack — and completely
              miss the match.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"That's"} not a made-up example. {"That's"} real data. From a
              real store. Sitting in a real database. Powering a real on-demand
              delivery marketplace.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Now imagine millions of these. Every product in every supermarket,
              supplied by a different manufacturer, each with its own creative
              interpretation of what a product name should look like.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Welcome to the world of retail product data. And welcome to
              Chapter 2.
            </p>

            {/* Video */}
            <div className="flex justify-center my-[20px]">
              <video
                className="rounded-xl w-full max-w-[300px]"
                controls
                playsInline
                muted
              >
                <source
                  src="/blogs/messy-data-platform/content/video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* topic-1: The Problem */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Problem
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The job of an online data delivery platform is to ensure that
              every product listed on the platform has a clean, standardised
              name — the kind of name a customer can actually search for and
              recognise.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              However, they {"don't"} control the data. Manufacturers do. And
              manufacturers, it turns out, are spectacularly bad at naming their
              own products consistently.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Here's"} what the raw data actually looked like:
            </p>
            <ul className="text-[#9EB3CF] text-lg font-bwmss01 list-disc pl-[30px] flex flex-col gap-[8px]">
              <li>
                {'"Coc Col 12pk"'} → Coca-Cola Classic 12-Pack
              </li>
              <li>
                {'"BUD LT 24PK BTLS"'} → Bud Light 24-Pack Bottles
              </li>
              <li>
                {'"HNKN 6PK BTL"'} → Heineken 6-Pack Bottles
              </li>
            </ul>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To give you a real sense of the challenge, {"here's"} a simplified
              look at what the raw input actually looked like — and what we
              needed the AI to output:
            </p>
            <div className="flex flex-col gap-[10px]">
              <p className="text-white text-base font-aeonik">
                Raw Input (Messy Manufacturer Data)
              </p>
              <pre className="bg-[#0d2137] border border-[#1a3a6e] rounded-xl p-4 text-[#9EB3CF] text-sm font-mono overflow-x-auto">
{`{
  "Manufacturer_Category_1": "Beer",
  "Manufacturer_Category_2": "Craft Beer",
  "Brand_Path": "Stoneface Brewing Co",
  "Manufacturer_Item_Name": "STONEFACE MOZ ACCALYPSE DDH",
  "Manufacturer_Size": "4 pk",
  "upc": 636251776120
}`}
              </pre>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-white text-base font-aeonik">
                Expected Output (Standardised for E-commerce)
              </p>
              <pre className="bg-[#0d2137] border border-[#1a3a6e] rounded-xl p-4 text-[#9EB3CF] text-sm font-mono overflow-x-auto">
{`{
  "Standardized_Product_Name": "Stoneface Brewing Co Mozaccalypse Double Dry Hopped IPA",
  "Category": "Alcohol > Beer > Craft Beer",
  "Size": "16 oz x 4 ct"
}`}
              </pre>
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Look at that input. {'"STONEFACE MOZ ACCALYPSE DDH"'} needs to
              become {'"Stoneface Brewing Co Mozaccalypse Double Dry Hopped IPA."'}{" "}
              The abbreviation {'"DDH"'} needs to be expanded. The misspelling
              needs to be corrected. The size {'"4 pk"'} needs to become{" "}
              {'"16 oz x 4 ct"'}, which means the individual container size{" "}
              {"isn't"} even in the raw data and needs to be looked up.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Spelling errors. Cryptic abbreviations. Missing details. No
              standard format. And this {"wasn't"} a few hundred records. This
              was millions.
            </p>
          </div>

          {/* topic-2: The Human Bottleneck */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Human Bottleneck
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Before us, every single record was cleaned by hand.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A person would look at a garbled product name, cross-reference it
              against manufacturer databases, Google the UPC code if needed, and
              manually rewrite it into the correct format.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">The numbers:</p>
            <ul className="text-[#9EB3CF] text-lg font-bwmss01 list-disc pl-[30px] flex flex-col gap-[8px]">
              <li>
                <b className="text-white">100 records per day</b> per person
              </li>
              <li>
                <b className="text-white">10% error rate</b> — meaning roughly
                1 in 10 still had mistakes after human review
              </li>
            </ul>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              At the scale an online data delivery platform operates, this was
              unsustainable. You {"can't"} throw more people at a data problem
              that grows faster than your headcount. And every error that slips
              through means a customer {"can't"} find what {"they're"} looking
              for — which means lost sales for the retailer.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              They needed a fundamentally different approach.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"That's"} when they called us.
            </p>
          </div>

          {/* topic-3: Why This Problem Is Deceptively Hard */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Why This Problem Is Deceptively Hard
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              On the surface, {'"clean up a product name"'} sounds like a
              simple text transformation. Run it through an LLM, get a clean
              name back, move on.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"It's"} not.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Here's"} what makes it genuinely difficult:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">
                The rules {"don't"} exist upfront.
              </b>{" "}
              A standardised product name needs to follow a consistent format
              and include all relevant information. But which details matter
              depends on the product category. Beverages need container type
              (Bottle, Can). Other categories have their own requirements. These
              rules {"weren't"} documented anywhere. They had to be discovered
              iteratively, painfully, by evaluating model outputs against client
              expectations and working backwards to figure out what the{" "}
              {'"right"'} format actually looked like.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">
                Information is scattered across multiple sources.
              </b>{" "}
              The manufacturer record might say {'"Coc Col 12pk"'}, which tells
              you almost nothing useful. To construct the full, standardised
              name, we had to pull from three different sources:
            </p>
            <ol className="text-[#9EB3CF] text-lg font-bwmss01 list-decimal pl-[30px] flex flex-col gap-[8px]">
              <li>
                <b className="text-white">Manufacturer product details</b> —
                including product descriptions, images, and UPC codes — often
                incomplete or inconsistent
              </li>
              <li>
                <b className="text-white">UPC-based Google searches</b> — to
                find supplementary product details when the manufacturer data{" "}
                {"wasn't"} enough
              </li>
              <li>
                <b className="text-white">Product images</b> — to visually
                identify things like container type (bottle, can, pouch, box)
                that {"weren't"} mentioned in the text data at all
              </li>
            </ol>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Edge cases are everywhere.</b>{" "}
              Multi-packs. Seasonal variants. Regional naming differences.
              Promotional packaging. Not every rule applies to every product and
              the long tail of edge cases in retail data is enormous.
            </p>
          </div>

          {/* topic-4: The Solution */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Solution: A Multi-Model Reasoning Pipeline
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We {"didn't"} build a simple prompt-and-respond system. We built a
              reasoning pipeline that had multiple models working together,
              cross-checking each other, and flagging uncertainty for human
              review.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              And we built it entirely on open-source models.
            </p>
          </div>

          {/* topic-5: The Model Stack */}
          <div
            id="topic5"
            ref={(el) => (topicRefs.current[4] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Model Stack
            </h4>
            <ul className="text-[#9EB3CF] text-lg font-bwmss01 list-disc pl-[30px] flex flex-col gap-[8px]">
              <li>
                <b className="text-white">DeepSeek R1</b> — Constructs the
                standardised product name from raw data.
              </li>
              <li>
                <b className="text-white">Nemotron Ultra 70B</b> — Verifies the
                output and flags inconsistencies.
              </li>
              <li>
                <b className="text-white">Qwen QwQ 32B</b> — Cross-validates
                and handles edge cases.
              </li>
            </ul>

            <h5 className="text-white text-xl font-aeonik tracking-wide mt-[10px]">
              How The Multi-Model Verification Works
            </h5>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Rather than trusting any single {"model's"} output, we built a
              triangulation system. All three reasoning models process the same
              record simultaneously, and their outputs are compared:
            </p>
            <ul className="text-[#9EB3CF] text-lg font-bwmss01 list-disc pl-[30px] flex flex-col gap-[8px]">
              <li>
                <b className="text-white">All 3 match</b> → High Confidence
                (auto-approved)
              </li>
              <li>
                <b className="text-white">2 out of 3 match</b> → Medium
                Confidence
              </li>
              <li>
                <b className="text-white">All 3 different</b> → Low Confidence
                (flagged for human review)
              </li>
            </ul>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This is the key insight: instead of trying to make one model
              perfect, we used multiple models to keep each other honest.{" "}
              {"It's"} the same principle behind peer-reviewed research —
              consensus is more reliable than confidence.
            </p>

            <h5 className="text-white text-xl font-aeonik tracking-wide mt-[10px]">
              The Vision Component
            </h5>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Some product attributes, especially container type, simply{" "}
              {"can't"} be extracted from text. Some records include that detail,
              but plenty {"don't"}.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              So we processed manufacturer product images through a computer
              vision pipeline to identify container types visually: Bottle, Can,
              and other packaging formats. That information was then fed into the
              reasoning {"LLM's"} context so it could construct a complete,
              accurate product name.
            </p>
          </div>

          {/* topic-6: The Results */}
          <div
            id="topic6"
            ref={(el) => (topicRefs.current[5] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Results
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Here's"} the before and after:
            </p>
            <ul className="text-[#9EB3CF] text-lg font-bwmss01 list-disc pl-[30px] flex flex-col gap-[8px]">
              <li>
                <b className="text-white">100 → 50,000</b> Records processed
                per day. {"That's"} a 500x increase.
              </li>
              <li>
                <b className="text-white">10% → 6%</b> Error rate. 40% fewer
                mistakes.
              </li>
              <li>
                <b className="text-white">100% → 32%</b> Records needing human
                review. 68% now run fully automated.
              </li>
              <li>
                <b className="text-white">Scalability?</b> Unlimited. Any
                volume. On demand.
              </li>
            </ul>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A few things worth calling out: 68% full automation means more
              than two out of every three records go from raw manufacturer data
              to standardised product name with zero human involvement. The
              remaining 32% are flagged because the multi-model verification
              found disagreement, which is exactly the kind of record you want a
              human to look at.
            </p>
          </div>

          {/* topic-7: What We Learned */}
          <div
            id="topic7"
            ref={(el) => (topicRefs.current[6] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              What We Learned
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Building this system taught us more about working with LLMs than
              any tutorial or benchmark ever could. A few takeaways:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The prompt is the product.</b> In
              systems where the rules are complex and constantly evolving, prompt
              engineering {"isn't"} a one-time setup. {"It's"} a continuous
              refinement process that demands advanced prompt engineering and
              deep domain understanding. The rules {"weren't"} just written,
              they were discovered, tested, broken, rewritten, and tested again.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">
                Multi-model verification beats single-model confidence.
              </b>{" "}
              {"Don't"} try to make one model perfect. Run the same task through
              multiple models and compare their outputs. When they agree,
              confidence is high. When they disagree, {"you've"} automatically
              identified the records that need human attention. {"It's"} the
              difference between hoping for accuracy and engineering for it.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">
                Infrastructure flexibility matters as much as model quality.
              </b>{" "}
              The move from fixed Azure VMs to {"RunPod's"} pay-per-minute
              billing {"didn't"} make our models smarter. But it made our
              solution economically viable at scale. Choose infrastructure that
              matches your usage pattern, not just your compute needs.
            </p>
          </div>

          {/* topic-8: What's Next */}
          <div
            id="topic8"
            ref={(el) => (topicRefs.current[7] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              {"What's"} Next
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This project taught us that the real challenge in AI {"isn't"} the
              models — {"it's"} the systems around them. The data pipelines. The
              verification patterns. The prompt evolution. The infrastructure
              decisions.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We went deep on the engineering craft behind this project — the
              mega-prompt failures, the debugging tricks, the confidence
              detection hacks. {"That's"} coming in{" "}
              <b className="text-white">
                Chapter 2.5: 6 Hard Lessons from an LLM Data Pipeline.
              </b>
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              If {"you're"} building with LLMs and want to skip some of the
              mistakes we made, that one{"'s"} for you.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              And if {"you're"} sitting on messy data at scale — whether {"it's"}{" "}
              product names, medical records, financial documents, or anything
              else — this pattern of multi-model reasoning, iterative prompt
              engineering, and smart infrastructure is remarkably versatile.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01 italic">
              Messy data? We {"don't"} clean it. We solve it.
              <br />— Fast Code AI
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
