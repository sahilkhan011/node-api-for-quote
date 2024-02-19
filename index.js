const express = require("express");
const quotesRouter = require("./routes/quote");
const server = express();
const port = 8585;
server.use(express.json());
server.use("/api/quotes", quotesRouter.router);

server.listen(port, () => {
  console.log(`SERVER STARTED ON PORT ${port}`);
});
