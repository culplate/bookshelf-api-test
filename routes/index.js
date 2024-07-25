import express from "express";
import booksRouter from "./booksRoutes.js";

const router = express.Router();
const jsonParser = express.json();

router.use("/books", jsonParser, booksRouter);

export default router;
