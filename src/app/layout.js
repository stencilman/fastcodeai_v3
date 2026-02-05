import "./globals.css";
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
});

const bwmss01 = localFont({
  src: [
    {
      path: "../../public/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bwmss01",
});

export const viewport = {
  themeColor: '#00081f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fastcode.ai'),
  title: {
    default: "FastCode AI - Operationalize Your AI",
    template: "%s | FastCode AI",
  },
  description: "Stop building from scratch. Start with a proven infrastructure. FastCode AI helps you build and scale AI solutions.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "FastCode", "Infrastructure", "React", "Next.js", "Software Development"],
  authors: [{ name: "FastCode AI" }],
  creator: "FastCode AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "FastCode AI - Operationalize Your AI",
    description: "Stop building from scratch. Start with a proven infrastructure.",
    siteName: "FastCode AI",
    images: [
      {
        url: "/FastCodeAI_color.png",
        width: 1200,
        height: 630,
        alt: "FastCode AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastCode AI - Operationalize Your AI",
    description: "Stop building from scratch. Start with a proven infrastructure.",
    images: ["/FastCodeAI_color.png"],
    creator: "@FastCodeAI",
  },
  icons: {
    icon: "/FastCodeAI_color.png",
    shortcut: "/FastCodeAI_color.png",
    apple: "/FastCodeAI_color.png",
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
