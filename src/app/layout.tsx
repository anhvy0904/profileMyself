import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nguyen Thi Anh Vy | Software Engineer & Computer Science Student Portfolio",
  description:
    "Personal portfolio of Nguyen Thi Anh Vy, a Computer Science student at Vietnam-Korea University (VKU) interested in software engineering, AI, UI/UX, and technology for social impact.",
  keywords: [
    "Nguyen Thi Anh Vy",
    "グエン・ティ・アイン・ヴィ",
    "Computer Science",
    "Vietnam-Korea University",
    "VKU",
    "Software Engineer",
    "Web Development",
    "AI",
    "Mobile Development",
    "UI/UX Design",
    "Portfolio",
    "Zengaku",
    "Color Blindness Assistant",
    "AI Aging Care",
    "JLPT N4",
  ],
  authors: [{ name: "Nguyen Thi Anh Vy", url: "https://github.com/anhvy0904" }],
  creator: "Nguyen Thi Anh Vy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anhvy0904.github.io",
    title: "Nguyen Thi Anh Vy | Engineering Portfolio",
    description:
      "Personal portfolio of Nguyen Thi Anh Vy, Computer Science student at VKU passionate about software engineering, AI, UI/UX, and building useful digital experiences.",
    siteName: "Nguyen Thi Anh Vy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Thi Anh Vy | Software Engineer Portfolio",
    description:
      "Computer Science student at VKU passionate about software engineering, AI, UI/UX, and building useful digital experiences.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground selection:bg-[#FFCC4D] selection:text-slate-950 min-h-screen flex flex-col"
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
