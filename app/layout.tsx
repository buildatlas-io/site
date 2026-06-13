import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas — Open Developer Infrastructure",
  description:
    "Build world-class open developer infrastructure that gives builders more capability, ownership, and freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="scroll-smooth [color-scheme:dark] bg-[oklch(8%_0.015_250)]"
    >
      <body className="min-w-[320px] text-[oklch(96%_0.006_250)] bg-[linear-gradient(180deg,oklch(10%_0.018_250),oklch(7%_0.014_250)_58%,oklch(9%_0.013_250))]">
        {/* Radial blue glow — sits above the body linear gradient */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-[3] pointer-events-none bg-[radial-gradient(circle_at_50%_-10%,oklch(28%_0.075_255_/_0.36),transparent_34rem)]"
        />

        {/* Grid lines — replaces body::before (split into 2 single-layer divs) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-[2] pointer-events-none opacity-[0.42] [mask-image:linear-gradient(180deg,black,transparent_78%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(oklch(100%_0_0_/_0.045)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(100%_0_0_/_0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        {/* Dot patterns — replaces body::after (split into 2 single-layer divs) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-[1] pointer-events-none opacity-[0.26]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(94%_0.02_255_/_0.8)_0_1px,transparent_1.4px)] [background-position:11vw_15vh] [background-size:29rem_29rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(72%_0.1_255_/_0.48)_0_1px,transparent_1.4px)] [background-position:76vw_23vh] [background-size:37rem_37rem]" />
        </div>

        {children}
      </body>
    </html>
  );
}
