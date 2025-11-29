import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import Authenticated from "./layout/Authenticated";

// Páginas
import Dashboard from "./pages/Dashboard";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/** Ruta pública de Login/Registro */}
          <Route path="/login" element={<LoginRegisterPage />} />

          {/** Rutas para usuario autenticado */}
          <Route path="/" element={<Authenticated />}>
            <Route index element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
