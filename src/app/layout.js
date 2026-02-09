import "./globals.css";
import "./styles/theme.css";
import "./styles/base.css";
import "./styles/animations.css";
import "./styles/components.css";
import "./styles/vendor.css";
import localFont from "next/font/local";
import Navbar from "./component/Navbar";
import SmoothScroll from "../components/SmoothScroll";
import { GlobalProvider } from "./context/GlobalContext";

const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/aeonik/AeonikTRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/aeonik/AeonikTRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
  preload: true,
});

const bwmss01 = localFont({
  src: [
    {
      path: "../../public/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bwmss01",
  display: "swap",
  preload: true,
});

export const viewport = {
  themeColor: '#00081f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fastcode.ai'),
  title: {
    default: "Fast Code AI",
    template: "%s | FastCode AI",
  },
  description: "Fast Code AI - Accelerating Innovation FastCode AI helps you build and scale AI solutions.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "FastCode", "Infrastructure", "React", "Next.js", "Software Development"],
  authors: [{ name: "FastCode AI" }],
  creator: "FastCode AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Fast Code AI ",
    description: "Fast Code AI - Accelerating Innovation",
    siteName: "FastCode AI",
    images: [
      {
        url: "/public/logo1.png",
        width: 1200,
        height: 630,
        alt: "FastCode AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Code AI",
    description: "Fast Code AI - Accelerating Innovation",
    images: ["/public/logo1.png"],
    creator: "@FastCodeAI",
  },
  icons: {
    icon: "/public/logo1.png",
    shortcut: "/public/logo1.png",
    apple: "/public/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${aeonik.variable} ${bwmss01.variable}`}>
        <GlobalProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </GlobalProvider>
      </body>
    </html>
  );
}
