import { Button } from "./ui/button";

export default function Video({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your Generated Video</h2>
      <div className="overflow-hidden rounded-lg border bg-black aspect-video flex items-center justify-center">
        <video controls className="w-full h-full object-contain">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex justify-end">
        <Button variant="outline">Download Video</Button>
      </div>
    </div>
  );
}
