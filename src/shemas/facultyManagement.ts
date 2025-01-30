import { z } from "zod";

export const facultyShema = z.object({
  name: z.string({ required_error: "Please  Select a Name" }),
});
export const depertmentShema = z.object({
  name: z.string({ required_error: "Please  Select a Name" }),
});
