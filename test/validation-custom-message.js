import Joi from "joi";

describe("Joi message", () => {
  it("should can custome message in object validation", () => {
    const schema = Joi.object({
      username: Joi.string().required().email().message({
        "any.required": "{{#label}} harus di isi",
        "string.email": "{{#label}} harus di valid email",
      }),
      password: Joi.string().required().min(6).max(10).message({
        "any.required": "{{#label}} harus di isi",
        "string.min": "{{#label}} harus lebih dari {{#limit}} karakter",
        "string.max": "{{#label}} harus kurang dari {{#limit}} karakter",
      }),
    });
    const request = {
        username:"Aziz@gmail.com",
        password:"Aziz123445"
    };
    const result = schema.validate(request, {
      abortEarly: false,
    });
    console.info(result);
  });
  //   it("should can custome message", () => {
  //     const schema = Joi.string().min(3).max(10).message({
  //       "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
  //       "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
  //     });
  //     const request = "aaaaaaaaaaaaaaaaaaa";
  //     const result = schema.validate(request);
  //     console.info(result);
  //   });
});
