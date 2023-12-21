import { z } from "zod";

export const contactFormSchema = z.object({
   name: z.string().nonempty("O nome é obrigatório"),
   email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
   departament: z.string().nonempty("Escolher um departamento é obrigatório"),
   message: z.string().optional(),
});