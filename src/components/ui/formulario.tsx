import { LabelInput } from "./labelInput";
import { PrimaryButton } from "./primaryButton";

export function Formulario() {
  return (
    <div
      className="relative p-[1px] rounded-xl overflow-hidden
    bg-gradient-to-r from-green-500 via-[#24a9e7] to-green-500
    animate-gradient-x bg-[length:200%_200%]
    hover:animate-gradient-x-fast
    transition-transform duration-300
    w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-2/4"
    >
      <form className=" bg-gray-100 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 w-full">
        <LabelInput
          legend="Nombre y Apellido"
          placeholder="Ej: Pepito Quispe"
          required
        />
        <LabelInput legend="Teléfono" placeholder="Ej: 987654321" required />
        <LabelInput
          legend="Correo Electrónico"
          placeholder="Ej: contacto@gmail.com"
          required
        />
        <LabelInput
          legend="Mensaje"
          placeholder="Ej: Me gustaría información sobre..."
          multiline
        />
        <PrimaryButton className="w-full sm:w-40">Enviar</PrimaryButton>
      </form>
    </div>
  );
}
