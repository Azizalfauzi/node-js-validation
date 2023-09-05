import Joi from "joi";

describe("Joi Custom validate", () => {
  it("should can joi custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string()
        .required()
        .min(6)
        .max(100)
        .custom((value, helpers) => {
          if (value.startWith("Aziz")) {
            return helpers.error("password.wrong");
          }
          return value;
        })
        .messages({
          "password.wrong": "password can not start with Aziz",
        }),
      confirmPassword: Joi.string().required().min(6).max(100),
    })
      .custom((value, helpers) => {
        if (value !== value.confirmPassword) {
          return helpers.error("register.password.different");
        }
        return value;
      })
      .messages({
        "register.password.different":
          "password and confirm password is different",
      });
    const request = {
      username: "Aziz@gmail.com",
      password: "Aziz123",
      confirmPassword: "mbuh",
    };
    const result = registerSchema.validate(request, {
      abortEarly: false,
    });
    console.info(result);
  });
});
