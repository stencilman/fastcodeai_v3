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

export const metadata = {
  title: "Theme Starter",
  description: "FastCode theme starter for new Next.js projects.",
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
