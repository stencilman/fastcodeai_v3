export const caseStudies = [
  {
    slug: "process-flow-ai",
    hero: {
      badges: ["Complex Value", "Research and Deployment"],
      title: "Revolutionising Engineering Safety",
      subtitle:
        "Using advanced AI and computer vision, it processes PFDs and PNIDs 50x faster than traditional methods, reducing costs by 93% and error rates by 90%, while enabling real-time safety decision-making across SATC's infrastructure.",
      image: {
        src: "/v2/case-studies/case-3.jpg",
        alt: "ProcessFlow AI dashboard",
        width: 1920,
        height: 1080,
      },
      backgroundImage: "/case-studies/process-flow-ai/background.jpg",
      readTime: "5 min read",
      meta: [
        { label: "Industry", value: "Oil and Gas" },
        { label: "Duration", value: "1 year" },
        { label: "Time", value: "Aug'24 – Ongoing" },
        { label: "Team", value: "Team of 7" },
      ],
    },
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        tocTitle: "Challenge",
        blocks: [
          {
            type: "text",
            content: [
              "Saudi Aramco Technologies Company (SATC) faced a critical challenge in their engineering operations. Their Quantitative Risk Assessment (QRA) process, essential for evaluating isolation procedures, EPS Transfer, and ensuring safety compliance, relied heavily on complex, time-consuming manual analysis of engineering diagrams. Engineers struggled with accuracy concerns and real-time decision-making bottlenecks that posed significant risks to operational efficiency and safety. ",
              "The stakes were high: these processes directly impact the safety of engineering operations across SATC's vast infrastructure, where any oversight could have serious consequences.",
            ],
          },
        ],
      },
      {
        id: "overview-video",
        title: "",
        // tocTitle: "Overview Video",
        blocks: [
          {
            type: "video",
            placeholder: "Overview video coming soon",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution: AI-Powered Intelligence",
        tocTitle: "Solution",
        blocks: [
          {
            type: "text",
            content: [
              "ProcessFlow AI emerged as SATC's game-changing solution, empowering the company to make faster, smarter decisions in safety and engineering while significantly improving operational efficiency",
            ],
          },
        ],
      },
      {
        id: "data-foundation",
        title: "Data Foundation",
        tocTitle: "Data Foundation",
        navLabel: "Data",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Data Collection & Preparation",
                bullets: [
                  "Open Source Training Data: 10+ public P&ID diagrams for initial model training",
                  "Proprietary SATC Data: 3,000 Saudi Aramco P&IDs with domain-specific symbols",
                  "Data Types: Engineering diagrams, Heat/Material Balance tables, equipment specifications",
                  "Annotation Volume: 500,000+ component annotations across diagrams",
                ],
              },
              {
                heading: "Our Data Engineering Role",
                bullets: [
                  "Symbol Library Creation: Built comprehensive database of 2,000+ industry-standard symbols",
                  "Template Matching: Developed algorithms for component extraction from complex diagrams",
                  "OCR Pipeline: Custom text extraction for equipment tags and line numbers",
                  "Domain Adaptation: Fine-tuned on SATC-specific symbols and nomenclature",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        tocTitle: "Architecture",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "AI Infrastructure",
                bullets: [
                  "Model Selection: Custom vision transformers optimized for diagram analysis",
                  "GPU Server: A100 instance at 300 USD/month (cheapest market option for large models)",
                  "Processing Pipeline: Distributed processing across multiple models for efficiency",
                  "Caching Layer: Redis for frequently accessed diagram components",
                ],
              },
              {
                heading: "Technical Stack",
                bullets: [
                  "Backend: FastAPI with async processing for high throughput",
                  "ML Framework: PyTorch with custom architectural components",
                  "OCR Engine: Combination of Easy-OCR and TR-OCR for text extraction",
                  "Database: PostgreSQL for component relationships and metadata",
                  "Deployment: Kubernetes for scalable container orchestration",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "operational-costs",
        title: "Operational Costs",
        tocTitle: "Costs",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Traditional SME Approach: 45,000 USD/month",
                bullets: [
                  "10 SMEs at 4,500 USD/month each",
                  "Processing: 2-3 P&IDs per day",
                  "Error rate: 30%",
                ],
              },
              {
                heading: "ProcessFlow AI Solution: 3000 USD/month",
                bullets: [
                  "A100 GPU server: 3000 USD",
                  "Processing: 100+ P&IDs per day",
                  "Error rate: 2%",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "mi-ai-law",
    hero: {
      badges: ["RAG System", "LegalTech Automation"],
      title: "AI Legal Helper",
      subtitle: "A premier German OEM, renowned as a market leader, prioritizes quality and epitomizes luxury and innovation in the automotive sector. Known for its relentless pursuit of excellence, the brand has consistently introduced ground breaking technologies and luxurious vehicles, establishing the gold standard for safety, performance, and design.",
      image: {
        src: "/v2/case-studies/case-4.jpg",
        alt: "MiAI Law dashboard",
        width: 1920,
        height: 1080,
      },
      backgroundImage: "/case-studies/process-flow-ai/background.jpg",
      readTime: "6 min read",
      meta: [
        { label: "Industry", value: "Law" },
        { label: "Duration", value: "6 months" },
        { label: "Time", value: "May'25 – Nov'25" },
        { label: "Team", value: "Team of 6" },
      ],
    },
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        tocTitle: "The Challenge",
        blocks: [
          {
            type: "text",
            variant: "cards",
            content: [
              "Manual Research Burden: Lawyers spend vast amounts of time manually reviewing legal documents and analyzing case law.",
              "Prohibitive Costs: Traditional legal research at $50-100/hour makes quality legal services inaccessible for many.",
              "Processing Delays: Law firms and in-house legal teams face weeks of delays in processing cases and making decisions.",
              "Human Error: Manual document review is prone to oversight and inconsistency.",
            ],
          },
        ],
      },
      // add image here
      {
        id: "image",
        title: "",
        blocks: [
          {
            type: "image",
            src: "/v2/case-studies/MiAI-Law-Demo.jpg",
          },
        ],
      },
      {
        id: "data-foundation",
        title: "Data Foundation",
        tocTitle: "Data Foundation",
        navLabel: "Data",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Data Collection & Curation",
                bullets: [
                  "Scope: 500,000+ legal cases across 9 Australian jurisdictions",
                  "Sources: Public court websites, legislation databases, case law repositories",
                  "Formats Handled: HTML, DOCX, PDF, and various proprietary court formats",
                  "Web Scraping Infrastructure: Custom crawlers for each jurisdiction's unique structure",
                ],
              },
              {
                heading: "Our Data Processing Role",
                bullets: [
                  "Extraction: Built specialised scrapers for different court websites and formats",
                  "Standardisation: Converted diverse formats into unified structured database",
                  "Curation: Cleaned, validated, and enriched data with metadata",
                  "Optimisation: Created efficient indexing for sub-second retrieval",
                  "Compliance: Implemented alternating data sources to manage copyright considerations",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "solution",
        title: "Solution: MiAI Law Chatbot revolutionises legal research",
        tocTitle: "Solution",
        blocks: [
          // {
          //   type: "subsections",
          //   layout: "two-column",
          //   variant: "card",
          //   items: [
          //     {
          //       heading: "Intelligent Document Analysis",
          //       bullets: [
          //         "Automates legal document review, case law analysis, and doctrinal research",
          //       ],
          //     },
          //     {
          //       heading: "Advanced Case Summarisation",
          //       bullets: [
          //         "Instantly analyses case documents and extracts key details",
          //       ],
          //     },
          //     {
          //       heading: "Smart Legal Research",
          //       bullets: [
          //         "Retrieves and analyses relevant case law and statutes using RAG (Retrieval-Augmented Generation)",
          //       ],
          //     },
          //     {
          //       heading: "Contract Audits and Reviews",
          //       bullets: [
          //         "Highlights potential risks and suggests alternative clauses grounded in legal principles",
          //       ],
          //     },
          //   ],
          // },
          {
            type: "text",
            variant: "cards",
            content: [
              "Intelligent Document Analysis: Automates legal document review, case law analysis, and doctrinal research",
              "Advanced Case Summarisation: Instantly analyses case documents and extracts key details",
              "Smart Legal Research: Retrieves and analyses relevant case law and statutes using RAG (Retrieval-Augmented Generation)",
              "Contract Audits and Reviews: Highlights potential risks and suggests alternative clauses grounded in legal principles",
            ],
          }
        ],
      },
      {
        id: "impact",
        title: "Impact",
        tocTitle: "Impact",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Speed & Efficiency",
                bullets: [
                  "60x Faster Case Resolution: Legal research that took days now completes in minutes",
                  "85% Time Reduction: Lawyers reclaim a full workday per case, handling 5x more clients",
                  "100% Accuracy: AI ensures more comprehensive case law coverage than manual search",
                ],
              },
              {
                heading: "Cost Savings",
                bullets: [
                  "90% Cost Reduction: From 50-100 USD/hour for manual research to <5 USD per query",
                  "ROI in 2 Months: Law firms recover investment through efficiency gains",
                  "Scale Economics: Mid-size firms save 200,000+ USD annually on research costs",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "data-intelligence-platform",
    hero: {
      badges: ["Deploy in weeks", "Data Analytics"],
      title: "Build Intelligence from Data",
      subtitle:
        "Every company sits on a mountain of data, yet turning it into something meaningful still takes months of effort, complex tools, and specialized teams. The Data Intelligence Platform changes that.",
      // image: {
      //   src: "/v2/case-studies/case-5.jpg",
      //   alt: "Data Intelligence Platform",
      //   width: 1920,
      //   height: 1080,
      // },
      // backgroundImage: "/case-studies/data-intelligence/background.jpg",
      readTime: "5 min read",
      // meta: [
      //   { label: "Industry", value: "Enterprise" },
      //   { label: "Duration", value: "Few weeks" },
      //   { label: "Time", value: "Ongoing" },
      //   { label: "Team", value: "Cross-functional" },
      // ],
    },
    sections: [
      {
        id: "unified-solution",
        title: "Our Unified Solution",
        tocTitle: "Our Unified Solution",
        blocks: [
          {
            type: "text",
            content: [
              "It helps organizations move from scattered data silos to connected, insight-ready intelligence faster than ever. It brings together everything you need to find the right data, understand what it means, and keep it accurate and trustworthy, all in one place.",
            ],
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        tocTitle: "How it works",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Find what matters instantly.",
                bullets: [
                  "Search across documents, logs, contracts, and telemetry data using natural language. No coding or data wrangling required.",
                ],
              },
              {
                heading: "Label and train at scale.",
                bullets: [
                  "The platform automates supervision and labeling using a mix of AI models, rules, and validation loops. Manual effort drops by up to 90 percent.",
                ],
              },
              {
                heading: "Understand context.",
                bullets: [
                  "It goes beyond detection to reasoning, applying your business logic and policies so that decisions are grounded in reality.",
                ],
              },
              {
                heading: "Keep quality in check.",
                bullets: [
                  "Every data stream, model, and decision is monitored for accuracy and drift. Governance and lineage are built in for full transparency.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        tocTitle: "Why it matters",
        blocks: [
          {
            type: "text",
            content: [
              "Teams can move from raw data to reliable insight in weeks instead of months. No waiting for perfect datasets or endless dashboard iterations. Just fast, clear answers that drive confident decisions.",
            ],
          },
        ],
      },
      {
        id: "impact",
        title: "The Impact",
        tocTitle: "The Impact",
        blocks: [
          {
            type: "text",
            content: [
              "Analysts and engineers spend less time on tedious prep work. Business teams get trusted insights when they need them. AI and automation projects scale faster and deliver real outcomes.",
            ],
          },
        ],
      },
      {
        id: "start-small",
        title: "Start small, grow fast",
        tocTitle: "Start small, grow fast",
        blocks: [
          {
            type: "text",
            content: [
              "You do not need to replace your existing systems. In just a few weeks you can connect your data, set up retrieval and quality loops, and see immediate results. Watch your organization evolve from data heavy to intelligence driven one step at a time.",
              "Let's explore what's possible with your data.",
            ],
          },
        ],
      },
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);

export const defaultCaseStudySlug = caseStudies[0]?.slug;
