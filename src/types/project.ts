import type { projectSchema } from "@/schemas";
import type { z } from "zod";

export type Project = z.infer<typeof projectSchema>;
