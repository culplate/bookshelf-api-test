import { books } from "../app.js";
import { createBookSchema } from "../schemas/bookSchemas.js";

export function getAllBooks(req, res, next) {
  try {
    return res.status(200).send(books);
  } catch (e) {
    next(e);
  }
}

export function getOneBook(req, res, next) {
  try {
    const book = books.find((item) => item.id === req.params.id);

    if (book === undefined) {
      return res.status(404).send({ message: "Not found" });
    } else {
      return res.status(200).send(book);
    }
  } catch (e) {
    next(e);
  }
}

export function deleteBook(req, res, next) {
  try {
    const book = books.find((item) => item.id === req.params.id);

    if (book === undefined) {
      return res.status(404).send({ message: "Not found" });
    } else {
      books.splice(books.indexOf(book), 1);
      return res.status(204).end();
    }
  } catch (e) {
    next(e);
  }
}

export function createBook(req, res, next) {
  try {
    const { error, value } = createBookSchema.validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.message });
    }

    const book = { ...value, id: crypto.randomUUID() };
    books.push(book);

    return res.status(201).send(book);
  } catch (e) {
    next(e);
  }
}
