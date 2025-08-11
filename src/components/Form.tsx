import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { FaWhatsapp } from "react-icons/fa";
import type { EmailType } from "../types";
import { useMutation } from "@tanstack/react-query";
import { sendCotizationEmail } from "../api/AppAPI";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Form() {
  const initialValues: EmailType = {
    name: "",
    phone: "",
    email: "",
    message: "",
    policy: "",
  };

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: sendCotizationEmail,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      reset(), toast.success(data);
    },
  });

  const handleCotizacion = (formData: EmailType) => mutate(formData);

  return (
    <div id="contact">
      <h3 className="C_titulo-seccion">Hablanos de tu proyecto</h3>

      <form
        onSubmit={handleSubmit(handleCotizacion)}
        className="flex flex-col items-center
          px-7 gap-5
          md:px-20

          *:w-full *:md:w-[550px]
        "
      >
        <div>
          <input
            className={`C_home-input ${
              errors.name && "border-b-3 border-red-700"
            }`}
            type="text"
            placeholder="Nombre"
            {...register("name", {
              required: "Tu nombre es obligatorio",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div>
          <input
            className={`C_home-input ${
              errors.phone && "border-b-3 border-red-700"
            }`}
            type="tel"
            placeholder="Número de teléfono"
            {...register("phone", {
              required: "Tu teléfono es obligatorio",
            })}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </div>

        <div>
          <input
            className={`C_home-input ${
              errors.email && "border-b-3 border-red-700"
            }`}
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Tu email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Correo Electrónico inválido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div>
          <textarea
            className={`C_home-input 
                  h-24 
                  lg:h-32  
                ${errors.message && "border-b-3 border-red-700"}`}
            placeholder="Mensaje"
            {...register("message", {
              required: "Un mensaje es obligatorio",
            })}
          ></textarea>
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label className="flex items-center gap-1 justify-center">
            <input
              type="checkbox"
              {...register("policy", {
                required:
                  "Por favor, acepta la política de privacidad para continuar",
              })}
            />
            <p>
              He leído y acepto la{" "}
              <Link
                to={"/privacy-policy"}
                target="_blank"
                className="text-blue-400 font-bold text-sm"
              >
                Politica de Privacidad*
              </Link>
            </p>
          </label>
          {errors.policy && (
            <ErrorMessage>{errors.policy.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Enviar Mensaje"
          className="bg-[#0098B0] uppercase font-bold cursor-pointer shadow-lg shadow-cyan-600
              mx-10 w-full py-1.5
              md:py-3 md:text-lg md:mt-6
              lg:w-[300px] lg:text-xl

              transition-all hover:scale-110 hover:shadow-xl  active:scale-110 active:shadow-xl duration-300
            "
        />
      </form>

      <a
        href="https://wa.me/50662830706"
        target="_blank"
        className="flex gap-1 items-center justify-center
          mt-3
          md:text-lg md:mt-4
          lg:text-xl lg:mt-5
          xl:text-2xl xl:mt-6

          transition-transform hover:scale-110 duration-300 active:scale-110
        "
      >
        <p>Contáctanos por</p>

        <div
          className="
              w-8 
              md:w-10
              
          "
        >
          <FaWhatsapp className="w-full h-full" />
        </div>
        <p>WhatsApp</p>
      </a>
    </div>
  );
}
