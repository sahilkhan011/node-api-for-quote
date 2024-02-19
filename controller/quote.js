const fs = require("fs");
const filePath = "./JSON/quote.json";

function readJsonFile() {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return [];
  }
}

function writeJsonFile(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error("Error writing to JSON file:", error);
  }
}

exports.create = (req, res) => {
  const jsonOjb = readJsonFile();
  const maxId = jsonOjb.length > 0 ? jsonOjb[jsonOjb.length - 1].id + 1 : 1;

  const newItem = {
    id: maxId,
    quote: req.body.quote,
    author: req.body.author,
  };

  jsonOjb.push(newItem);
  writeJsonFile(jsonOjb);

  res.status(201).json(newItem);
};

exports.getAll = (req, res) => {
  const jsonOjb = readJsonFile();
  res.json(jsonOjb);
};

exports.get = (req, res) => {
  const jsonOjb = readJsonFile();
  const id = +req.params.id;
  const quote = jsonOjb.find((item) => item.id === id);

  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({
      status: false,
      message: "Quote not found",
    });
  }
};

exports.update = (req, res) => {
  const jsonOjb = readJsonFile();
  const id = +req.params.id;

  const index = jsonOjb.findIndex((item) => item.id === id);

  if (index !== -1) {
    const updatedquote = {
      id: id,
      quote: req.body.quote,
      author: req.body.author,
    };

    jsonOjb.splice(index, 1, updatedquote);
    writeJsonFile(jsonOjb);

    res.status(200).json({
      status: true,
      message: "Quote Updated Successfully",
    });
  } else {
    res.status(404).json({
      status: false,
      message: "Quote not found",
    });
  }
};

exports.remove = (req, res) => {
  const jsonOjb = readJsonFile();
  const id = +req.params.id;

  const index = jsonOjb.findIndex((item) => item.id === id);

  if (index !== -1) {
    jsonOjb.splice(index, 1);
    writeJsonFile(jsonOjb);

    res.status(200).json({
      status: true,
      message: "Quote Deleted Successfully",
    });
  } else {
    res.status(404).json({
      status: false,
      message: "Quote not found",
    });
  }
};
