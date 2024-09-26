"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { testFileAction } from "@/lib/actions";
import { useEffect, useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!file) return;

    file.arrayBuffer().then((buffer) => {
      const base64 = Buffer.from(buffer).toString("base64");
      testFileAction(base64);
    });
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">File</Label>
      <Input id="picture" type="file" onChange={handleFileChange} />
    </div>
  );
}
