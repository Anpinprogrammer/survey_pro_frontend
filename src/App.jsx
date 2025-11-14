import { BrowserRouter, Routes, Route } from "react-router-dom"

//Layouts
import Authenticated from "./layout/Authenticated"

//Paginas
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/**Rutas Usuario Autenticado */}
          <Route path="/" element={<Authenticated />} >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
