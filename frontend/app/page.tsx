import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col max-w-7xl mx-auto w-full">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <Sparkles className="mr-1 h-3 w-3" />
                  <span>Introducing Text2Video</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Create{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Mathematical Animations
                  </span>{" "}
                  from Text
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Generate elegant, 3Blue1Brown-style animations with
                  mathematical shapes, equations, and animated text
                  explanations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/generate"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 text-sm font-medium text-white shadow transition-colors hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Try it now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-white">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Mathematical Shapes 🔵</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create elegant animations with circles, vectors, graphs, and
                  geometric shapes that explain complex concepts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-white">
                  <path d="M5 3a2 2 0 0 0-2 2" />
                  <path d="M19 3a2 2 0 0 1 2 2" />
                  <path d="M21 19a2 2 0 0 1-2 2" />
                  <path d="M5 21a2 2 0 0 1-2-2" />
                  <path d="M9 3h1" />
                  <path d="M9 21h1" />
                  <path d="M14 3h1" />
                  <path d="M14 21h1" />
                  <path d="M3 9v1" />
                  <path d="M21 9v1" />
                  <path d="M3 14v1" />
                  <path d="M21 14v1" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Animated Text ✍️</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Text that elegantly fades in and out, with smooth transitions
                  and mathematical equations rendered beautifully.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-white">
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                  <path d="m4.93 4.93 14.14 14.14" />
                  <path d="m19.07 4.93-14.14 14.14" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Visual Explanations 🧠</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Turn complex mathematical and scientific concepts into
                  intuitive, visual explanations that anyone can understand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-indigo-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to create educational animations?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join educators and content creators who use our platform to
                  explain complex concepts visually.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/generate"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 text-sm font-medium text-white shadow transition-colors hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Generate Your First Video
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Text2Video. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium underline underline-offset-4">
              Terms
            </Link>
            <Link
              href="/"
              className="text-sm font-medium underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
