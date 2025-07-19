import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { toast } from "react-toastify";
import { es } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import CustomModal from "./CustomModal";
import type { formData } from "../../types/premiumTypes";

type FormType = {
  name: string;
  phone: string;
  message: string;
};

export default function AgendaForm() {
  const today = new Date();
  const [date, setDate] = useState<Date>();
  const [hora, setHora] = useState<string>("07:00");
  const [isValidDate, setIsValidDate] = useState(true);

  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<formData>({
    name: "",
    phone: "",
    date: today,
    hora: "",
    message: "",
  });

  const openModal = () => {
    setVisible(true);
    setTimeout(() => setIsOpen(true), 10); // permite activar transición
    document.body.classList.add("overflow-hidden")
  };
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setVisible(false), 400); // espera que termine la animación
    document.body.classList.remove("overflow-hidden")
  };

  const handleChangeDate = (e: Date) => {
    setDate(e);
    setIsValidDate(true);
  };

  const handleChangeHora = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hora = e.target.value;
    if (hora >= "07:00" && hora <= "18:00") {
      setHora(hora);
    } else {
      toast.error("Hora fuera de rango");
    }
  };

  const initialValues = {
    name: "",
    phone: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleForm = (formData: FormType) => {
    if (!date) {
      setIsValidDate(false);
      return;
    }

    const data = {
      ...formData,
      date,
      hora,
    };

    setData(data);
    openModal();
  };

  const handleCrearCita = () => {
    closeModal();
    reset();
    toast.success("Cita enviada Correctamente");
  };

  return (
    <>
      <form
        id="contact"
        className="
          px-5
          md:px-12
          xl:px-24
          C_seccion"
        onSubmit={handleSubmit(handleForm)}
      >
        <div>
          <h3 className="C_titulo-seccion">Agenda Rápida</h3>

          <div className="flex
            flex-col gap-12
            lg:flex-row lg:gap-8
            xl:gap-24
          ">
            <div className="flex-1
              flex flex-col gap-3.5
              md:grid grid-cols-2 md:gap-7 
            ">
              <div className="C_premium-input-contenedor">
                <label className="C_premium-label" htmlFor="name">Tu Nombre</label>
                <input
                  id="name"
                  className="C_premium-input C_sombra"
                  type="text"
                  placeholder="Nombre"
                  {...register("name", {
                    required: "Tu nombre es obligatorio",
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </div>
              <div className="C_premium-input-contenedor">
                <label className="C_premium-label" htmlFor="phone">Tu Numero</label>
                <input
                  id="phone"
                  className="C_premium-input C_sombra"
                  type="number"
                  placeholder="Numero"
                  {...register("phone", {
                    required: "Tu numero es obligatorio",
                    minLength: {
                      value: 8,
                      message: "Minimo 8 numeros",
                    },
                    maxLength: {
                      value: 8,
                      message: "Maximo 8 numeros",
                    },
                  })}
                />
                {errors.phone && (
                  <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
              </div>
              <div className="C_premium-input-contenedor col-span-2">
                <label className="C_premium-label" htmlFor="message">Tu Mensaje</label>
                <textarea
                  id="message"
                  className="C_premium-textarea C_sombra"
                  placeholder="Mensaje"
                  {...register("message", {
                    required: "Un mensaje es obligatorio",
                  })}
                ></textarea>
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-3.5">
              <div className="p-3.5 rounded-xl C_sombra">
                <DayPicker
                  animate
                  mode="single"
                  selected={date}
                  startMonth={today}
                  onSelect={handleChangeDate}
                  required
                  locale={es}
                  disabled={[
                    { before: today },
                    { from: today },
                    { dayOfWeek: 0 },
                  ]}
                />
                {!isValidDate && (
                  <ErrorMessage>{"Seleccione una fecha"}</ErrorMessage>
                )}
              </div>

              <input
                type="time"
                value={hora}
                min={"07:00"}
                max={"18:00"}
                className="bg-white py-2.5 px-5 rounded-xl
                  text-base
                  md:text-lg
                  C_sombra"
                onChange={(e) => handleChangeHora(e)}
              />
            </div>
          </div>

          <input
            type="submit"
            value="Agendar Cita"
            className="text-white bg-[#239A95] cursor-pointer mt-5 py-2.5 px-7 transition-all ease-in-out duration-300 hover:scale-110 hover:bg-[#157773]
              w-full text-lg
              md:text-xl
              xl:w-auto
            "
          />
        </div>
      </form>
      <CustomModal
        data={data}
        handleCrearCita={handleCrearCita}
        visible={visible}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
}
