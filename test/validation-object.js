import Joi from "joi";

describe("Joi Object", () => {
  it("should can validate object create user nested", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().required().min(3).max(100),
      name: Joi.string().required().min(3).max(100),
      address: Joi.object({
        street: Joi.string().max(200).required(),
        city: Joi.string().max(100).required(),
        country: Joi.string().max(100).required(),
        postalCode: Joi.string().max(10).required(),
      }).required(),
    });

    const request = {
      address: {},
    };

    const result = createUserSchema.validate(request, {
      abortEarly: false,
    });
    if (result.error) {
      result.error.details.forEach((value) => {
        console.info(`${value.path}=${value.message}`);
      });
    }
  });
  //   it("should can validate object", () => {
  //     const loginSchema = Joi.object({
  //       username: Joi.string().required().min(3).max(100).email(),
  //       password: Joi.string().required().min(3).max(100),
  //     });

  //     const request = {
  //       username: "Aziz@gmail.com",
  //       password: "Rahasia",
  //     };

  //     const result = loginSchema.validate(request, {
  //       abortEarly: false,
  //     });
  //     console.info(result);
  //   });
});
