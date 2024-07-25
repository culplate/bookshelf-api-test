import express from "express";
import booksRouter from "./booksRoutes";

const router = express.Router();
const jsonParser = express.json();

router.use("/books", jsonParser, booksRouter);

export default router;
