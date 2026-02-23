"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Stop Using Mega-Prompts" },
  { id: "topic2", label: "2. Make the Model Do More" },
  { id: "topic3", label: "3. Force Reasoning" },
  { id: "topic4", label: "4. Double-Check Its Own Rules" },
  { id: "topic5", label: "5. Don't Use AI for Deterministic Tasks" },
  { id: "topic6", label: "6. Detect When an LLM is Confused" },
  { id: "topic7", label: "7. Final Thoughts" },
];

const RECOMMENDED_SLUGS = ["mega-prompts-fail", "messy-data-platform", "flexa"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* Intro */}
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              When you first start working with Large Language Models (LLMs),
              the instinct is to treat them like magic boxes. Just give them all
              your instructions, feed them the data, and watch the perfect
              output roll in.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Recently, I worked on a massive data pipeline project that quickly
              proved this approach wrong.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Our goal was to generate standardized product names, categories,
              and sizes from raw, messy alcohol data (mostly beer and wines) for
              an on-demand delivery marketplace. The standardized name had to be
              clean enough to display directly on an e-commerce storefront.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To give you an idea, here is a simplified look at the raw input
              and what we needed the LLM to output:
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
              Because there were dozens of formatting rules, exceptions, and
              corrections required to turn that raw data into a clean product
              name, we decided to articulate every single rule in one massive
              prompt.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Crafting that {'"humongous rule"'} prompt turned out to be a
              nightmare. Through trial, error, and thousands of API calls, we
              had to completely rethink our approach. Here are the 6 hardest
              lessons I learned about moving from basic prompt writing to true
              LLM Systems Engineering.
            </p>
          </div>

          {/* topic-1: Stop Using Mega-Prompts */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              1. Stop Using Mega-Prompts (Divide and Conquer)
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              When you cram too many rules into a single prompt, LLMs develop a
              kind of tunnel vision. They might execute Rule #4 perfectly, yet
              ignore the Title Case requirement or forget to censor an
              expletive.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              On top of that, not every rule applies to every product. For
              instance, our {'"Appellation location"'} rules were only relevant
              when the raw data actually included appellation details. As the
              rule set expanded, it became increasingly difficult to ensure the
              model consistently honored every applicable constraint.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The Fix:</b> We broke the monolithic
              prompt into a pipeline of smaller, well-defined tasks. Initially,
              this multi-step approach felt less stable than a single
              comprehensive prompt. But with careful prompt tuning and
              sequencing, it ultimately outperformed the one-shot prompt in both
              reliability and overall accuracy.
            </p>
          </div>

          {/* topic-2: Make the Model Do More */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              2. Make the Model Do More to Get Better Results
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We needed to extract the specific brand of each product from the
              raw data. Initially, we just asked, {'"What is the brand?"'}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Eventually, we changed the prompt to:{" "}
              {'"Output the brand of the product, AND output the exact source field where you obtained this information (e.g., raw data, Google search, UPC barcode lookup)."'}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Counterintuitively, making the model output more information made
              its primary output better. Why? Because forcing the model to cite
              its source acts as a grounding mechanism. It forces accountability
              and drastically reduces hallucinations because the model cannot
              rely purely on its pre-trained knowledge; it has to point to the
              exact input field.
            </p>
          </div>

          {/* topic-3: Force Reasoning */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              3. Force the Model to Explain Its Reasoning
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              When building complex pipelines, debugging a bad LLM output is
              frustrating. You find yourself asking,{" "}
              {'"Why on earth did it name the product that?"'}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To solve this, we started asking the model to explain its
              reasoning before outputting the final JSON. Suddenly, debugging
              became easy. We could read the output and see exactly which rules
              the model considered, which rules were unclear, or if two rules
              were conflicting.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Pro-Tip:</b> Even if you {"don't"} need
              the reasoning in your final database, ask for it anyway. We found
              that models perform slightly better when they have to justify
              their work. It forces a {'"Chain of Thought"'} that leads to
              higher quality answers.
            </p>
          </div>

          {/* topic-4: Double-Check Its Own Rules */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              4. Ask the Model to Double-Check Its Own Rules
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This sounds almost too simple to work, but it does. At the end of
              our prompts, we added an instruction asking the model to review
              the rules again and double-check its own proposed answer against
              them before finalizing the output.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Just like a human reviewing their work before hitting submit, this
              simple repetition and self-correction loop caught edge-case errors
              and noticeably improved our overall accuracy.
            </p>
          </div>

          {/* topic-5: Don't Use AI for Deterministic Tasks */}
          <div
            id="topic5"
            ref={(el) => (topicRefs.current[4] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              5. {"Don't"} Use AI for Deterministic Tasks
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To verify the category of a product, we scraped data from multiple
              websites. We fed these results to the LLM and asked it to compare
              them. If the category from each website matched, we flagged it as
              high confidence.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Comparing text strings to see if they match seems incredibly
              simple — perfect for an LLM, right?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Wrong. We found that in rare cases ({"<"}0.01%), the LLM would
              make a mistake. Because the model was already overloaded with
              other cognitive tasks, it would occasionally misalign simple
              matches.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The Lesson:</b> An LLM is a probability
              machine, not a strict logic engine. For strict, rules-based
              comparisons, we moved the task out of the prompt and into a simple
              Python script. Why settle for 99.99% accuracy from an LLM when a
              few lines of traditional code will give you 100%? Do the robust
              things manually.
            </p>
          </div>

          {/* topic-6: Detect When an LLM is Confused */}
          <div
            id="topic6"
            ref={(el) => (topicRefs.current[5] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              6. How to Detect When an LLM is Confused
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              For our standardized product names, we used a triangulation
              approach: we ran the prompt through 3 different LLMs
              simultaneously.
            </p>
            <ul className="text-[#9EB3CF] text-lg font-bwmss01 list-disc pl-[30px] flex flex-col gap-[8px]">
              <li>
                <b className="text-white">All 3 match</b> = High Confidence
              </li>
              <li>
                <b className="text-white">2 match</b> = Medium Confidence
              </li>
              <li>
                <b className="text-white">All 3 different</b> = Low Confidence
                (Flag for human review)
              </li>
            </ul>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              However, running three separate model inferences for every
              attribute (such as size or category) quickly became too expensive.
              For those cases, we needed a single model call that could also
              assess its own confidence. So we made the instruction explicit:
              return the answer only if you are confident, otherwise, output{" "}
              {'"ambiguous."'}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The problem? LLMs hate admitting they {"don't"} know something.
              They will bend over backwards to give you an answer rather than
              outputting {'"ambiguous."'}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To actually infer when a model was confused, we developed two
              workarounds:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">1. Consistency Checks:</b> We asked the
              model the exact same question multiple times. If the answer
              fluctuated, we manually flagged it as ambiguous.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">2. The Token-Time Proxy:</b> We
              analyzed the time and token length of the {"model's"} reasoning.
              Even if the model eventually arrived at a conclusive answer, the
              very fact that it needed a massive amount of tokens to{" "}
              {'"talk itself"'} into the answer was mathematical proof that the
              model was confused. Long reasoning = high probability of
              ambiguity.
            </p>
          </div>

          {/* topic-7: Final Thoughts */}
          <div
            id="topic7"
            ref={(el) => (topicRefs.current[6] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Final Thoughts
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Prompt engineering is no longer just about finding the right{" "}
              {'"magic words."'} As your projects scale, it becomes about
              Systems Engineering. {"It's"} about building pipelines, forcing
              accountability, triangulating confidence, and knowing exactly when
              to take the decision out of the {"AI's"} hands entirely.
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
