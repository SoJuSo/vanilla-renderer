import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Register the ts-node/esm loader
register("ts-node/esm", pathToFileURL("./"));

// Start the server
import("./server.ts");
