import express from "express";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getOneBook);
booksRouter.delete("/:id", deleteBook);
booksRouter.post("/", createBook);

export default booksRouter;
