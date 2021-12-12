// External Module requirements
import express from "express";

// Internal Module requirements
import { router } from "./routes/routes";

// Constants
const kPort = process.env.PORT || 3000;
export const app = express();

// Middleware
app.use("/", router);

// Server
app.listen(kPort, () => {
  console.log(`Server is listening on port ${kPort}`);
});
