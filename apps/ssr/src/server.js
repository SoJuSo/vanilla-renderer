import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
    </head>
    <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
    </body>
    </html>
    `);
});

ViteExpress.listen(app, 3000, () => console.log("listen to http://localhost:3000"));
