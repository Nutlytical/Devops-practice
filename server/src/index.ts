import express, { Express } from "express";
import cors from "cors";

import { router as UserRoute } from "./routes/user";

export const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", UserRoute);

app.listen(5000, () =>
  console.log("🚀 Server is ready at http://localhost:5000")
);
