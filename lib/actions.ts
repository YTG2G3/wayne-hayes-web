"use server";

import fs from "fs";
import crypto from "crypto";
import { exec } from "child_process";

// This action receives a file, downloads it into ./files folder with crypto.randomUUID as name
// It then runs a shell in @/bash/backend.sh with the file as argument
// It returns the output of the shell
export async function runBashAction(file: string): Promise<string | null> {
  try {
    const f = Buffer.from(file, "base64");

    const fileName = crypto.randomUUID();
    const filePath = `./files/${fileName}`;

    // See if files folder exists
    if (!fs.existsSync("./files")) {
      fs.mkdirSync("./files");
    }

    fs.writeFileSync(filePath, f);

    return new Promise((resolve) => {
      exec(
        `bash ./backend.sh .${filePath}`,
        { cwd: "./bash" },
        (error, stdout, stderr) => {
          if (error) {
            resolve("Error: " + stderr);
          } else {
            resolve(stdout);
          }
        }
      );
    });
  } catch {
    return null;
  }
}
