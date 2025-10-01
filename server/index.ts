import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleContactForm } from "./routes/contact";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/api/contact", handleContactForm);

  return app;
}
