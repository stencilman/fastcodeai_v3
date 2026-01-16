/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)"
          }
        }
      },
      animation: {
        "border-spin": 'border-spin 7s linear infinite'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'benz': "url('/potfolio/mbenz/img1.webp')",
        "vrups": "url('/our-work//vrups.jpg')",
        'learning': "url('/potfolio/fedLearning/img1-2.png')",
        'fitness': "url('/potfolio/fitness/img1-2.png')",
        "dataQuery": "url('/our-work/sqlwizard-logo1.png')",
        "lonelyAssist": "url('/our-work/lonely_llm.webp')",
        "fashion": "url('/our-work/fashion.png')",
        "bankMont": "url('/our-work/bankInsMo.png')",
        "rag": "url('/our-work/rag_weave.jpg')",
        "dermo": "url('/our-work/dermos.jpeg')",
        "automto": "url('/our-work/automto.png')",
        "gesrec": "url('/our-work/gesrec.png')",
        "bnk": "url('/our-work/bnk.png')",


        'blogHero': "url('/blogs/hero/img1-2.png')",
        'teamHero': "url('/team/img1-2.png')",

        // *** Blogs ***
        'blog1': "url('/blogs/latest-blog/img1.png')",
        'blog2': "url('/blogs/latest-blog/img3.png')",
        'blog3': "url('/blogs/latest-blog/img4.png')",
        'blog4': "url('/blogs/latest-blog/img2.png')",
        'kans': "url('/blogs/latest-blog/blog-kans.png')",
        'pinns': "url('/blogs/latest-blog/pinns-hero.png')",
        'pinns2d': "url('/blogs/latest-blog/pinns2d-hero.png')",
        'pinnslid': "url('/blogs/latest-blog/pinns-lid-hero.png')",
        // 'deepLearning': "url('/blogs/latest-blog/img3.png')",
        'whyaiHero': "url('/blogs/why-ai/hero/img1-2.png')",
        'rlhf': "url('/blogs/rlhf/hero/rlhf.jpeg')",
        'authRace': "url('/blogs/authenticity-race/hero/hero.jpeg')",
        'dvdb': "url('/blogs/dvdb/hero/img1.jpeg')",
        'thesis': "url('/blogs/thesis-reality/hero/img1.jpeg')",
        'gansHero': "url('/blogs/gan/hero/img1.jpeg')",
        'deepLearningHero': "url('/blogs/deep-learning/hero/img1.jpeg')",
        'aiDangers': "url('/blogs/ai-dangers/hero/img1.jpeg')",
        'animatedHero': "url('/blogs/animated-drawings/hero/img1.jpeg')",
        'craftingHero': "url('/blogs/crafting-visions/content/img1.jpeg')",
        'federatedHero': "url('/blogs/federated-learning/content/img1.jpeg')",
        'imoHero': "url('/blogs/imo-2024/content/IMO_logo.png')",
        'cyphyssHero': "url('/blogs/cyphyss-2024/content/banner.png')",
        'multiHopHero': "url('/blogs/multi-hop/content/hero.png')",
        'complexProbHero': "url('/blogs/solving-complex-problem/hero/img1.jpeg')",
        'nasHero': "url('/blogs/nas/hero/img1.jpeg')",
        'vitsHero': "url('/blogs/vits/hero/img1.jpeg')",
        'visionTransformers': "url('/blogs/vision-transformers/hero/img1.jpeg')",
        'oilGasHero': "url('/blogs/oil-gas/oilGas-Hero.webp')",
        'nvdiaHero': "url('/blogs/nvdia/hero/nvdia.jpg')",
        'journey': "url('/blogs/journey/growth-journey.jpeg')",
        'sequence': "url('/blogs/sequence/main.png')",
        'sequence_conc': "url('/blogs/sequence/concept.png')",
        'structural_biology': "url('/blogs/structural-biology/main.jpeg')",
        'omat': "url('/blogs/omat-2024/content.jpeg')",
        'aiMilestone': "url('/blogs/ai-milestone/main.jpg')",
        'claude': "url('/blogs/claude/main.png')",
        'claude-cont': "url('/blogs/claude/content.jpeg')",
        'dd-neural-network': "url('/blogs/dd-neural-network/main.jpeg')",
        'hardware-limitation': "url('/blogs/hardware-limitation/main.png')",
        'silu': "url('/blogs/silu/main.jpeg')",
        
        // *** Team Members ***
        'arjun': "url('/members/arjun.png')",
        'dhaval': "url('/members/dhaval1.png')",
        'prabal': "url('/members/Prabal1.jpg')",
        'abdul': "url('/members/abdul1.png')",
        'parth': "url('/members/parth.png')",
        'eshwar': "url('/members/eshwar.png')",
        'naren': "url('/members/naren.png')",
        'sanjay': "url('/members/sanjay.png')",
        'shreyas': "url('/members/shreyas1.jpg')",
        'yash': "url('/members/yash.jpg')",
        'gautham': "url('/members/gautham.png')",
        'sughosh': "url('/members/sughosh.png')",
        'tirth': "url('/members/tirth.png')",
        'rishabh': "url('/members/rishabh2.png')",
        'darshan': "url('/members/darshan1.png')",
        'prayag': "url('/members/prayag1.png')",
        'jadhav': "url('/members/jadhav.png')",
        'surya': "url('/members/surya.jpg')",
        'sridhar': "url('/members/sridhar.jpg')",
        'subham': "url('/members/subham.jpg')",
        'subham': "url('/members/subham.jpg')",
        'subham1': "url('/members/subham1.png')",
        'paranjit': "url('/members/paranjit.png')",
        'akash': "url('/members/akash.jpg')",
        'saket': "url('/members/saket.jpg')",
        'siddharth': "url('/members/siddharth.jpeg')",
      },
      background: {
        cusgrad: "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",

      },
      backgroundSize: {
        '110': '110%'
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        bwmss01: ["var(--font-bwmss01)"],
      }
    },
  },
  plugins: [Myclass],
};
