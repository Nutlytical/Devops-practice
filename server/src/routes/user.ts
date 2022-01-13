import axios from "axios";
import express, { Request, Response } from "express";

import { User } from "../types";

export const router = express.Router();

router.get("/", async (_, response: Response): Promise<void> => {
  try {
    const apiResponse = await axios.get(
      "https://randomuser.me/api/?results=20"
    );
    const data: User[] = apiResponse.data.results;

    response.json(data);
  } catch (error) {
    console.error(error);
  }
});

router.get(
  "/:gender",
  async (request: Request, response: Response): Promise<void> => {
    try {
      const { gender } = request.params;

      const apiResponse = await axios.get(
        `https://randomuser.me/api/?results=20&gender=${gender}`
      );
      const data: User[] = apiResponse.data.results;

      response.json(data);
    } catch (error) {
      console.error(error);
    }
  }
);
