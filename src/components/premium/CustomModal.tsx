import type { formData } from "../../types/premiumTypes";
import { formatDate } from "../../utils/utils";

type CustomModalProps = {
  visible: boolean;
  handleCrearCita: () => void;
  isOpen: boolean;
  closeModal: () => void;
  data: formData;
};

export default function CustomModal({
  data,
  handleCrearCita,
  visible,
  isOpen,
  closeModal,
}: CustomModalProps) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-10 bg-black/40 flex justify-center items-center">
      <div
        className={`bg-white rounded-2xl shadow-xl p-6 max-w-2xl w-full ${
          isOpen ? "show" : "hide"
        } 
        C_custom-modal-animacion
      `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className="font-bold
            text-xl
            lg:text-2xl
          "
          >
            Datos de la Cita
          </h2>
          <button
            onClick={closeModal}
            className="font-bold text-[#6b7280] cursor-pointer hover:text-[#1f2937]
              text-3xl
              xl:text-4xl
            "
          >
            ×
          </button>
        </div>
        <div className="C_custom-modal-datos">
          <p>
            <span>Nombre:</span> {data.name}
          </p>
          <p>
            <span>Numero de Teléfono:</span> {data.phone}
          </p>
          <p>
            <span>Dia y hora:</span> {formatDate(data.date)} a las {data.hora}
          </p>
          <p>
            <span>Mensaje:</span> {data.message}
          </p>
        </div>
        <div
          className="flex 
          justify-between mt-3
          lg:justify-end lg:gap-8

          C_custom-modal-footer
        "
        >
          <button
            onClick={closeModal}
            className="bg-[#c40505] hover:bg-[#990606]"
          >
            Cancelar
          </button>

          <button
            onClick={handleCrearCita}
            className="bg-[#4447df] hover:bg-[#2b2ecc]"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
