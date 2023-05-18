const validate = (schema) => {
  return (req, res, next) => {
    const error = schema.validate(req.body);
    if (error.error) {
      return res.status(422).send({ message: error.error.details[0].message });
    }
    next();
  };
};
export default validate;
