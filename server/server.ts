import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

morgan("tiny");

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
