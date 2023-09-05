import Joi from "joi";

describe("Joi Validation date", () => {
  it("should can validate date", () => {
    const birthDateShcema = Joi.date().required().max("now").min("12-11-1998");
    const result = birthDateShcema.validate("12-11-1997");
    console.info(typeof result.value);
    console.info(typeof result.error)

    const result2 = birthDateShcema.validate("12-11-1999");
    console.info(result2);
  });
});
