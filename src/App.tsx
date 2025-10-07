import { EstudiantesLayout } from "./components/layout/estudiantes"
import { Header } from "./components/layout/header"
import { InicioMain } from "./components/layout/inicioMain"

function App() {

  return (
    <>
      <Header />
      <InicioMain />
      <EstudiantesLayout />
    </>
  )
}

export default App
