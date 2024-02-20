import express, { json } from "express";
import router from "./routes/quote.js";
const server = express();
const port = 8585;
server.use(json());
server.use("/api/quotes", router);

server.listen(port, () => {
  console.log(`SERVER STARTED ON PORT ${port}`);
});
