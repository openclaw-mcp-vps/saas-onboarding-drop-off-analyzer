import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnboardIQ – Find Where Users Drop Off",
  description: "Track user behavior through your SaaS onboarding flow and identify the biggest drop-off points with actionable suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c11c1cf7-8a67-4217-b83d-68c121ee7780"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
