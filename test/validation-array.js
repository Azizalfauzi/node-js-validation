import Joi from "joi";

describe("Joi Array object", () => {
  it("should can validate array object", () => {
    const addressSchema = Joi.array()
      .items(
        Joi.object({
          street: Joi.string().max(200).required(),
          city: Joi.string().max(100).required(),
          country: Joi.string().max(100).required(),
          postalCode: Joi.string().max(10).required(),
        })
      )
      .min(1);
    const address = [
      {
        street: "Jalan belum ada",
      },
    ];

    const result = addressSchema.validate(address, {
      abortEarly: false,
    });
    console.info(result);
  });
  //   it("should can validate array", () => {
  //     const hobbiesSchema = Joi.array()
  //       .items(Joi.string().required().min(3).max(100))
  //       .min(1)
  //       .unique();

  //     const hobbies = ["A", "Coding", "Coding", "Program"];

  //     const result = hobbiesSchema.validate(hobbies, {
  //       abortEarly: false,
  //     });
  //     console.info(result);
  //   });
});
