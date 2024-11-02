import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password is required"
  ),
});

export const signupSchema = object({
  name: string({ required_error: "Name is required" }).min(
    1,
    "Name is required"
  ),
  username: string({ required_error: "Username is required" }).min(
    3,
    "Username min 3 characters length"
  ),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" }).min(
    4,
    "Password min 4 characters length"
  ),
  dateOfBirth: string({ required_error: "Date of Birth is required" }).refine(
    (val) => !isNaN(Date.parse(val)),
    {
      message: "Invalid Date format",
    }
  ),
});
