import Joi from "joi";

describe("Joi", () => {
  it("should can create schema ", () => {
    const schema = Joi.string().min(3).max(3).required();
    const result = schema.validate("Aziz");

    if (result.error) {
      console.info(result.error);
    }
  });

  it("should can validate basic data type", () => {
    const userNameSchema = Joi.string().email().required();
    const isAdminSchhema = Joi.boolean().required();
    const priceSchema = Joi.number().required().min(1000).max(10000);

    const resultUsername = userNameSchema.validate("aziz@gmail.com");
    console.info(resultUsername);
    const resultAdmin = isAdminSchhema.validate("salah");
    console.info(resultAdmin);
    const resultPrice = priceSchema.validate("abc");
    console.info(resultPrice);
  });
});
