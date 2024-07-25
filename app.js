import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use(cors());

export const books = [];

// Root route
app.use("/", routes);

// Обробка помилки неіснуючого роуту
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Відловлення помилок
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on this port: ${PORT}`);
});
