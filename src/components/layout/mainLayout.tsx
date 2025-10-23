import banerCarrusel1 from "../../assets/Baner-1.jpg";
import banerCarrusel2 from "../../assets/Baner-2.jpg";
import banerCarrusel3 from "../../assets/Baner-3.jpg";
import banerCarrusel4 from "../../assets/Baner-4.jpg";
import banerCarrusel5 from "../../assets/Baner-5.jpg";
import { BanerMatricula } from "./banerMatricula";
import { ImagenesCarrusel } from "../ui/imagenesCarrusel";
import { NostrosLayout } from "./nosotros";
import { ContactosLayout } from "./contactosLayout";
import { EstudiantesLayout } from "./estudiantes";

export function MainLayout() {
  const BannerCarrusel: string[] = [
    banerCarrusel1,
    banerCarrusel2,
    banerCarrusel3,
    banerCarrusel4,
    banerCarrusel5,
  ];

  return (
    <main className="font-sans bg-gray-200">
      <div className="w-full py-15">
        <BanerMatricula />
        <ImagenesCarrusel imagenesCarrusel={BannerCarrusel} />
      </div>
      <NostrosLayout />
      <EstudiantesLayout/>
      <ContactosLayout />
    </main>
  );
}
