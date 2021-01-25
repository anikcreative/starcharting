// Dependencies
import express, { static } from "express";
import bodyParser from "body-parser";

// Build server
import { join } from "path";
const app = express();
app.use(static(join(__dirname, "../public")));
app.get("/test", function (req, res) {
  return res.send("Hello World!");
});

// Run server
app.listen(process.env.PORT || 8080, function () {
  console.log(`%cServer started successfully`, "color: lime");
});
