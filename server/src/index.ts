import express, { Express, Response } from "express";

export const app: Express = express();
app.use(express.json());

app.get("/api", (_, res: Response) => {
  res.json({ status: "200" });
});

app.listen(5000, () =>
  console.log("🚀 Server is ready at http://localhost:5000")
);
