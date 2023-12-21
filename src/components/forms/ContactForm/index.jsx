import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./contactFormSchema";
import { useState } from "react";
import { contactApi } from "../../../services/api";

export const ContactForm = () => {
   const [loading, setLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: zodResolver(contactFormSchema),
   });

   const sendEmail = async (formData) => {
      try {
         setLoading(true);
         await contactApi.post("/emails", formData);
         alert("E-mail enviado com sucesso");
         reset();
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const submit = (formData) => {
      sendEmail(formData);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            type="text"
            placeholder="Nome"
            {...register("name")}
            error={errors.name}
            disabled={loading}
         />
         <Input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email}
            disabled={loading}
         />
         <Select
            {...register("departament")}
            error={errors.departament}
            disabled={loading}
         >
            <option value="">Selecione um departamento</option>
            <option value="redacao">Redação</option>
            <option value="administrativo">Administrativo</option>
         </Select>
         <Textarea
            placeholder="Mensagem"
            {...register("message")}
            error={errors.message}
            disabled={loading}
         />
         <button className="btn" type="submit" disabled={loading}>
            {loading ? "Enviando" : "Enviar mensagem"}
         </button>
      </form>
   );
};
