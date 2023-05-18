import Joi from "joi";
const schema = Joi.object({
  url: Joi.string().uri().required(),
});
export default schema;
