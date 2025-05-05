"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate video generation
    setTimeout(() => {
      // In a real app, this would be an API call to generate the video
      setVideoUrl("/placeholder.svg?height=480&width=640");
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-8 md:py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Generate Mathematical Animations ✨
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Describe the mathematical concept or animation you want to
                create, and our AI will generate a 3Blue1Brown-style video.
              </p>
            </div>

            <div className="space-y-4">
              <Textarea
                placeholder="Describe your animation... (e.g., 'Explain the concept of Euler's identity with animated vectors and equations that gradually appear')"
                className="min-h-[120px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600">
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Video...
                  </>
                ) : (
                  "Generate Video"
                )}
              </Button>
            </div>

            {videoUrl && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Your Generated Video</h2>
                <div className="overflow-hidden rounded-lg border bg-black aspect-video flex items-center justify-center">
                  <video
                    src={videoUrl}
                    controls
                    className="w-full h-full object-contain">
                    Your browser does not support the video tag.
                  </video>

                  {/* Fallback for placeholder */}
                  {videoUrl.includes("placeholder") && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-900">
                      <div className="relative w-full h-full">
                        {/* Mathematical animation placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full border-4 border-blue-500 animate-pulse"></div>
                        </div>
                        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-purple-500 animate-bounce"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full border-2 border-pink-500"></div>

                        {/* Text elements that would animate in a real video */}
                        <div className="absolute top-1/4 right-1/4 bg-black bg-opacity-70 p-2 rounded">
                          <p className="text-white font-mono">
                            e<sup>iπ</sup> + 1 = 0
                          </p>
                        </div>
                        <div className="absolute bottom-1/4 left-1/3 bg-black bg-opacity-70 p-2 rounded">
                          <p className="text-white font-mono">∫ f(x) dx</p>
                        </div>
                      </div>
                      <p className="text-center max-w-md mt-4 bg-black bg-opacity-70 p-2 rounded">
                        Your mathematical animation would appear here. This is a
                        placeholder showing the style of 3Blue1Brown videos.
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button variant="outline">Download Video</Button>
                </div>
              </div>
            )}
          </div>
        </div>
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
