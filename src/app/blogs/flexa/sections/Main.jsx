"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Overview" },
  { id: "topic2", label: "2. Where This Started" },
  { id: "topic3", label: "3. The Pattern No One Notices" },
  { id: "topic4", label: "4. Why Fast Code AI" },
  { id: "topic5", label: "5. What They Built" },
  { id: "topic6", label: "6. From the Team" },
  { id: "topic7", label: "7. Why This Story Matters" },
];

const RECOMMENDED_SLUGS = ["hardware-limitation", "growth-journey", "swiglu"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* topic-1: Overview */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A 25-year-old engineer at Fast Code AI was physically falling
              apart. So were his colleagues. They were building AI that could
              optimize everything, while ignoring the one system running their
              lives — the human body.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              So they pointed the AI at themselves. And built Flexa.
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p>
                <b className="text-white">Company:</b> Fast Code AI
              </p>
              <p>
                <b className="text-white">Industry:</b> Healthcare (AI-Powered
                Physiotherapy)
              </p>
              <p>
                <b className="text-white">Product:</b> Flexa — expert-level
                physiotherapy tracking on your phone
              </p>
              <p>
                <b className="text-white">Technology:</b> Neuromorphic AI engine
              </p>
              <p>
                <b className="text-white">Status:</b> Live on the App Store
              </p>
            </div>

            {/* Flexa video */}
            <div className="flex justify-center my-[20px]">
              <video
                className="rounded-xl w-full max-w-[300px]"
                controls
                playsInline
                muted
              >
                <source src="/blogs/flexa/content/flexa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* topic-2: Where This Started */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Where This Started
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Fast Code AI builds intelligent systems. Their engineering team
              works at the intersection of computer vision, real-time data
              processing, and AI — building tools that can see, track, and
              analyze complex systems as they happen. They optimize pipelines,
              models, latency, and throughput. They squeeze milliseconds out of
              machines for a living.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              They are also human. And the human body was never designed for
              14-hour desk sessions.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Parth is one of them. Twenty-five years old. Sitting at his home
              desk at Prestige Shantiniketan at 2 AM with a warm Red Bull and a
              spine that feels like someone stacked it wrong. His neck{" "}
              {"hasn't"} turned left in three days. His posture tells the whole
              story. He moves through the office like furniture with a pulse.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              He is not unique. He is everyone at the company.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Developer health is a blind spot. People who sit 10 to 14 hours a
              day are among the most physically at-risk populations in the
              workforce, but the tools to help them {"haven't"} caught up yet.
            </p>
          </div>

          {/* topic-3: The Pattern No One Notices */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Pattern No One Notices
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              There are two versions of building in tech.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"There's"} the version that gets posted — the glowing monitor at
              2 AM, the {'"grind"'} caption, the aesthetic hustle.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Then {"there's"} the real one. The one where a person quietly
              stops being a person and starts being a delivery mechanism for
              code. Eating badly. Sitting worse. Cracking open another can and
              telling himself the body can wait.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The body always waits. Until it stops waiting.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              One gloomy morning, Parth watches a senior engineer do the walk.
              Room to Fresh Mart. Shuffling. Shoulders caved in. Eyes barely
              open. The engineer grabs chips and a Red Bull — the exact same
              breakfast Parth had — and shuffles back.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The engineer looks like him. Moves like him. They are all becoming
              the same broken thing.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The problem had three layers:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Awareness.</b> Most developers {"don't"}{" "}
              realize how badly their bodies are compensating until something
              breaks. A locked neck {"doesn't"} happen overnight. {"It's"} the
              result of months of silent accumulation. By the time it hurts, the
              dysfunction is deeply embedded.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Access.</b> Good physiotherapy is
              expensive, time-consuming, and geographically limited. Most people{" "}
              {"don't"} bother. They search for {'"neck stretches,"'} try three
              of them once, and forget.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Personalization.</b> Every body breaks
              differently. A locked neck might not be a neck problem at all — it
              could be a shoulder compensating for a weak spine. The symptom and
              the cause are rarely in the same place. Without understanding how
              a specific person moves, any exercise prescription is a guess.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The problem was not individual. It was systemic. And nobody was
              treating it that way.
            </p>
          </div>

          {/* topic-4: Why Fast Code AI */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Why Fast Code AI
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Something snapped. Not in {"Parth's"} back, for once. In his head.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              His team already builds AI that can see, track, and analyze
              complex systems in real time. They already know how to process
              sensory data, detect patterns, and deliver feedback that improves
              over time.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The realization was painfully simple: they had every tool needed
              to solve this problem. They were just pointing the tools in the
              wrong direction.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              If they could optimize machines, they could optimize the people
              running them.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Fast Code AI holds expertise in:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Computer vision.</b> Fast Code{"  "}
              {"AI's"} engineers already know how to make AI interpret visual
              data, identify anomalies, and track changes over time. Movement
              analysis is, at its core, a computer vision problem.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Pattern recognition.</b> Their models
              are trained to find meaningful signals in complex, noisy data.
              Human movement is exactly that: complex, noisy, and highly
              individual.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The question was never whether Fast Code AI had the capability.
              Every tool they needed was already in the building. The question
              was whether anyone would point the lens inward.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">Parth did.</p>
          </div>

          {/* topic-5: What They Built */}
          <div
            id="topic5"
            ref={(el) => (topicRefs.current[4] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              What They Built
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Parth and his colleagues at Fast Code AI pointed the AI at
              themselves and built Flexa: expert-level physiotherapy tracking,
              that lives on your phone.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To understand what makes Flexa different, it helps to understand
              what it is not.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              It is not a wellness app. It does not play calming music. It does
              not remind you to breathe. It does not count your steps or tell
              you to {'"take breaks."'}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              It is not a generic exercise library. There are thousands of apps
              that show everyone the same stretches. The problem is that every
              body breaks differently, and the same stretch can help one person
              and do nothing for another.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              So how does Flexa actually work?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Exercise-based diagnosis</b> — Flexa
              uses guided exercises to identify dysfunction, compensation
              patterns, and restrictions in how you move. The diagnosis is
              active, not passive.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Personalized corrective exercises</b> —
              based on your specific movement patterns, not your age, not a
              questionnaire, not a generic library. Exercises chosen because the
              AI understands how your body specifically breaks down.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Adaptive over time</b> — as your body
              changes, the prescriptions change with it.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Accessible anywhere</b> — expert-level
              physiotherapy assessment that previously required an in-person
              specialist, delivered on a phone. To anyone. Anywhere.
            </p>
          </div>

          {/* topic-6: From the Team */}
          <div
            id="topic6"
            ref={(el) => (topicRefs.current[5] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              From the Team
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01 italic">
              {
                "\"It hit me one day that we spend all our time making AI that optimizes these insane systems, but nobody's optimizing us. That's it. So we just… built the thing we needed.\""
              }
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">— Parth</p>
          </div>

          {/* topic-7: Why This Story Matters */}
          <div
            id="topic7"
            ref={(el) => (topicRefs.current[6] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Why This Story Matters
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The contradiction.</b> A team that
              optimizes complex systems for a living {"wasn't"} optimizing the
              most important system — the human body. The realization {"wasn't"}{" "}
              a business insight. It was physical pain.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The insight.</b> Developer health is not
              a wellness perk or a soft initiative. {"It's"} a real problem with
              identifiable patterns, measurable dysfunction, and outcomes that
              can be improved with the right tools.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The approach.</b> Fast Code AI{" "}
              {"didn't"} look outside. They pointed their own AI at themselves
              and built a clinical-grade tool. The engineers were the first
              users.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The technology.</b> AI-powered movement
              analysis that uses exercises to both diagnose and treat — making
              Flexa a diagnostic and corrective tool, not just a stretch
              library.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">The bigger bet.</b> We track server
              uptime to the millisecond. We have on-call rotations for machines.
              But the human body — the one system that makes all of it possible
              — gets a standing desk and a suggestion to take breaks. Flexa is a
              bet that the same AI reshaping how we write code should reshape
              how we take care of the people writing it.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Not everyone at Fast Code AI thought this was a good idea. The
              company builds tools for enterprise clients and complex data
              systems. Building a consumer health app was a sideways move. There
              were conversations about scope, about distraction, about whether
              this was even their problem to solve.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Parth's"} argument was simple: look around the room. Count the
              people who {"can't"} sit up straight. Count the ones who wince
              when they stand up. This {"isn't"} someone {"else's"} problem.
              This is literally our problem. We are the use case.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The argument won — not because of a compelling business case, but
              because people in the room felt the pain.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This is Fast Code AI Chronicles. One company. Many industries.
              Every product has a story nobody tells.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Chapter 01 was healthcare. Chapter 02 is coming.
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
