import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { runBashAction } from "@/lib/actions";
import { useEffect, useState } from "react";

const MAX_FILE_SIZE = 1024 * 1024; // 1MB

export default function FileUpload({
  setResult,
}: {
  setResult: (result: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!file) return;

    file.arrayBuffer().then((buffer) => {
      if (buffer.byteLength > MAX_FILE_SIZE) {
        setResult("Error: File size exceeds 1MB limit");
        return;
      }

      const base64 = Buffer.from(buffer).toString("base64");
      runBashAction(base64)
        .then((res) => setResult(res || "Error: Unexpected error occurred"))
        .catch((e) => setResult("Error: " + e));
    });
  }, [file, setResult]);

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
