import { BrowserRouter, Routes, Route } from "react-router-dom"

//Layouts
import PublicLayout from "./layout/PublicLayout"
import Authenticated from "./layout/Authenticated"

//Paginas
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />} >
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          {/**Rutas Usuario Autenticado */}
          <Route path="/auth" element={<Authenticated />} >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
