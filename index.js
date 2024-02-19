const fs = require("fs");
const express = require("express");
const server = express();
const port = 8585;

let quotes = null;

server.use((req, res, next) => {
  quotes = JSON.parse(fs.readFileSync("dummy.json", "utf-8"));
  next();
});

server.use(express.json());

//// CREATE START
server.post("/quotes", (req, res) => {
  //console.log(req.body);
  const maxid = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
  //console.log(maxid);
  const newquote = {
    id: maxid,
    quote: req.body.quote,
    author: req.body.author,
  };
  quotes.push(newquote);
  fs.writeFileSync("dummy.json", JSON.stringify(quotes));
  res.status(201).json(newquote);
});
//// CREATE END

//// READ START
server.get("/quotes", (req, res) => {
  res.json(quotes);
});

server.get("/quotes/:id", (req, res) => {
  const id = +req.params.id;
  const quote = quotes.find((item) => item.id === id);
  res.json(quote);
});
//// READ END

//// UPDATE START
server.put("/quotes/:id", (req, res) => {
  const id = +req.params.id;
  //console.log(req.body);

  const updatedquote = {
    id: id,
    quote: req.body.quote,
    author: req.body.author,
  };

  const index = quotes.findIndex((item) => item.id === id);

  if (index !== -1) {
    quotes.splice(index, 1, updatedquote);
    fs.writeFileSync("dummy.json", JSON.stringify(quotes));
    res.status(200).json({
      status: true,
      message: "Quote Updated Successfully",
    });
  } else {
    res.status(200).json({
      status: false,
      message: "This id Quote Does Not Exist",
    });
  }
});
//// UPDATE END

//// DELETE START
server.delete("/quotes/:id", (req, res) => {
  const id = +req.params.id;

  const index = quotes.findIndex((item) => item.id === id);
  //const quote = quotes.find((item) => item.id === id);
  if (index !== -1) {
    quotes.splice(index, 1);
    fs.writeFileSync("dummy.json", JSON.stringify(quotes));
    res.status(200).json({
      status: true,
      message: "Quote Deleted Successfully",
    });
  } else {
    res.status(200).json({
      status: false,
      message: "This id Quote Does Not Exist",
    });
  }
});
//// DELETE END

server.listen(port, () => {
  console.log(`NODE PROJECT 4 SERVER STARTED ON PORT ${port}`);
});
