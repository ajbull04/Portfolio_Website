import { copyFileSync } from "node:fs";

// GitHub Pages serves 404.html for unknown routes so client-side routing works on refresh.
copyFileSync("dist/index.html", "dist/404.html");
