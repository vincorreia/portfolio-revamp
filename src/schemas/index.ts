import { z } from "zod";

const defaultStringSchema = z.string().trim().nonempty();

export const projectSchema = z.object({
  id: defaultStringSchema,
  title: defaultStringSchema,
  description: defaultStringSchema,
  image: defaultStringSchema,
  link: defaultStringSchema.optional(),
  github: defaultStringSchema.optional(),
  imageType: z.enum(["icon", "default"]).optional(),
});
