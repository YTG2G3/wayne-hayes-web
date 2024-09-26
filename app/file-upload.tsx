import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { runBashAction } from "@/lib/actions";
import { useEffect, useState } from "react";

export default function FileUpload({
  setResult,
}: {
  setResult: (result: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!file) return;

    file.arrayBuffer().then((buffer) => {
      const base64 = Buffer.from(buffer).toString("base64");
      runBashAction(base64).then((res) =>
        res ? setResult(res) : alert("An error occurred")
      );
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
