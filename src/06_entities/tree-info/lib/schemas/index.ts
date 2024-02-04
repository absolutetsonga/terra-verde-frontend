import { z } from "zod";

export const createTreePointSchema = z.object({
  image: z.instanceof(File),
});
