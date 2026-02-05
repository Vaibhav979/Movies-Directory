import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MovieDB — Discover Top Movies",
    template: "%s | MovieDB",
  },

  description:
    "Explore top-rated movies, cast details, and curated collections using TMDB API.",

  keywords: [
    "movies",
    "tmdb",
    "movie database",
    "film search",
    "top rated movies",
    "movie directory",
  ],

  openGraph: {
    title: "MovieDB — Discover Top Movies",
    description:
      "Browse top movies, cast, collections and more with MovieDB.",
    url: "http://localhost:3000",
    siteName: "MovieDB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <nav className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-100">
      🎬 <span>MovieDB</span>
    </div>

    {/* Links */}
    <div className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-100">
      <Link
        href="/"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        Home
      </Link>

      <Link
        href="/movies"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        Movies
      </Link>

      <ThemeToggle />
    </div>

  </div>
</nav>
  {children}
  <footer className="mt-16 border-t dark:border-gray-700 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
  Built with ❤️ using Next.js & TMDB API
</footer>

</body>
    </html>
  );
}
