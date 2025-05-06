"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Video from "@/components/video";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate video generation

    const response = await axios("http://127.0.0.1:8000/generate", {
      method: "POST",
      data: {
        text: prompt,
      },
    });

    console.log(response.data);
    setVideoUrl("http://127.0.0.1:8000" + response.data.video_url);
    setIsGenerating(false);
  };

  return (
    <div className="flex min-h-screen flex-col max-w-7xl mx-auto">
      <main className="flex-1">
        <div className="container max-w-7xl px-4 py-8 md:py-12">
          <div className="mb-8">
            <Button asChild variant={"ghost"}>
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
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

            {videoUrl && <Video videoUrl={videoUrl} />}
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
