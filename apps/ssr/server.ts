// server.ts
import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Vite 빌드 결과물 경로 설정
const buildPath = path.resolve(__dirname, "dist");

app.use(express.static(buildPath));

// SSR을 위한 간단한 라우트 예제
app.get("*", (req: Request, res: Response) => {
  const appHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR with Vite and Express</title>
    </head>
    <body>
        <div id="app1">SSR Content Here</div>
        <script type="module" src="/main.ts"></script>
    </body>
    </html>
  `;

  console.log(appHtml);
  res.send(appHtml);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`??`);
});
