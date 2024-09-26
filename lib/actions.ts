"use server";

import fs from "fs";
import crypto from "crypto";
import { exec } from "child_process";

export async function testFileAction(file: string) {
  console.log("asda");

  const f = Buffer.from(file, "base64");
  fs.writeFileSync("./files/test.pdf", f);
}

// This action receives a file, downloads it into ./files folder with crypto.randomUUID as name
// It then runs a shell in @/bash/backend.sh with the file as argument
// It returns the output of the shell
export async function runBashAction(file: string): Promise<string> {
  const f = Buffer.from(file, "base64");

  const fileName = crypto.randomUUID();
  const filePath = `./files/${fileName}`;

  // See if files folder exists
  if (!fs.existsSync("./files")) {
    fs.mkdirSync("./files");
  }

  fs.writeFileSync(filePath, f);

  return new Promise((resolve, reject) => {
    exec(`bash ./bash/backend.sh ${filePath}`, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}
