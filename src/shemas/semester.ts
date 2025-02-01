import { z } from "zod";

export const academicSemesterSchema = z.object({
  academicSemester: z.string({ required_error: "Please Select a Name" }),
  status: z.enum(["UPCOMING", "ONGOING", "ENDED"]),
  startDate: z.date({ required_error: "Please Select a Date" }),
  endDate: z.date({ required_error: "Please Select a Date" }),
  minCredit: z
    .number()
    .int()
    .min(0, { message: "Min credit must be at least 0" }),
  maxCredit: z
    .number()
    .int()
    .min(0, { message: "Max credit must be at least 0" }),
});
