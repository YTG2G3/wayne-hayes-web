"use client";

import { useState } from "react";
import FileUpload from "./file-upload";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="bg-zinc-100 w-screen h-screen flex justify-center items-center">
      <div className="bg-white px-6 py-4 rounded-lg">
        <FileUpload setResult={setResult} />

        {result && (
          <Textarea value={result} className="mt-4" contentEditable={false} />
        )}
      </div>
    </div>
  );
}
