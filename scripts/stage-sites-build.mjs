import { cp, mkdir, rename, rm } from "node:fs/promises";

const sourceDirectory = ".open-next";
const outputDirectory = "dist";

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(`${outputDirectory}/server`, { recursive: true });
await cp(sourceDirectory, `${outputDirectory}/server`, { recursive: true });
await rename(`${outputDirectory}/server/worker.js`, `${outputDirectory}/server/index.js`);
await cp(`${sourceDirectory}/assets`, `${outputDirectory}/static`, { recursive: true });
