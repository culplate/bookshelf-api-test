import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getOneBook,
} from "../controllers/booksControllers.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getOneBook);
booksRouter.delete("/:id", deleteBook);
booksRouter.post("/", createBook);

export default booksRouter;
