// index.ts

import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
