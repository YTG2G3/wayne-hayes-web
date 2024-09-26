import FileUpload from "./file-upload";

export default function Page() {
  return (
    <div className="bg-zinc-100 w-screen h-screen flex justify-center items-center">
      <div className="bg-white p-12 rounded">
        <FileUpload />
      </div>
    </div>
  );
}
