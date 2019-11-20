const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3002;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

var MongoClient = require("mongodb").MongoClient;

const reaction = mongoose.model("reaction", { results: Array });

app.post("/add", (req, res) => {
  const row = req;
  // console.log(req.body);
  // const MongoClient = require("mongodb").MongoClient;
  // const uri =
  //   // const client = new MongoClient(uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });
  // client.connect(err => {
  //   const collection = client.db("kognitions").collection("reactions");
  //   console.log(collection.find());

  //   // collection.insertOne({
  //   //   item: "canvas",
  //   //   qty: 100,
  //   //   tags: ["cotton"],
  //   //   size: { h: 28, w: 35.5, uom: "cm" }
  //   // });

  //   // perform actions on the collection object
  //   client.close();
  // });

  // "mongodb+srv://root:8gupdukRqbheThQH@cluster0-vohif.mongodb.net/kognitions?retryWrites=true&w=majority";
  mongoose.connect(
    "mongodb+srv://root:upH1TmBWiQYJG7jS@cluster0-vohif.mongodb.net/kognitions?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  newReaction = new reaction(req.body);

  newReaction.save().then(() => {
    console.log("done");
  });

  // 8gupdukRqbheThQH

  res.json({ resultOk: true });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
