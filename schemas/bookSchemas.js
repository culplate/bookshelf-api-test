import Joi from "joi";

export const createBookSchema = Joi.object({
  title: Joi.string().required().min(3).max(80).messages({
    "any.required": "title value is required",
    "string.min": "Min. title length is 3 symbols",
    "string.max": "Max. title length is 80 symbols",
  }),
  author: Joi.string().required().min(3).max(35).messages({
    "any.required": "author value is required",
    "string.min": "Min. author's name length is 3 symbols",
    "string.max": "Max. author's name length is 35 symbols",
  }),
  year: Joi.number().required().max(new Date().getFullYear()),
});
