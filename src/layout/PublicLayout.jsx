import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Lado izquierdo - Imagen/Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Contenido del lado izquierdo */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          {/* Logo */}
          <div className="mb-8 bg-white rounded-3xl p-8 shadow-2xl">
            <div className="w-32 h-32 flex items-center justify-center">
              {/* Reemplaza esto con tu logo o imagen */}
              <i className="fas fa-poll-h text-6xl text-blue-600"></i>
              {/* O usa una imagen: <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /> */}
            </div>
          </div>

          {/* Nombre de la aplicación */}
          <h1 className="text-4xl font-bold mb-4 text-center">
            Survey Pro
          </h1>
          
          {/* Descripción */}
          <p className="text-xl text-blue-100 text-center max-w-md mb-8">
            Crea encuestas profesionales y obtén insights valiosos para tu negocio
          </p>

          {/* Características */}
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3 text-blue-50">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <i className="fas fa-check text-lg"></i>
              </div>
              <span className="text-lg">Creación de encuestas en minutos</span>
            </div>
            <div className="flex items-center gap-3 text-blue-50">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <i className="fas fa-check text-lg"></i>
              </div>
              <span className="text-lg">Análisis en tiempo real</span>
            </div>
            <div className="flex items-center gap-3 text-blue-50">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <i className="fas fa-check text-lg"></i>
              </div>
              <span className="text-lg">Distribución multi-canal</span>
            </div>
          </div>

          {/* Estadísticas decorativas */}
          <div className="grid grid-cols-3 gap-6 mt-12 w-full max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-blue-200">Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-sm text-blue-200">Encuestas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">2M+</div>
              <div className="text-sm text-blue-200">Respuestas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lado derecho - Contenido principal */}
      <div className="flex-1 lg:w-1/2 flex flex-col min-h-screen bg-gray-50">
        {/* Header móvil - Solo visible en pantallas pequeñas */}
        <div className="lg:hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 text-center">
          <div className="inline-flex bg-white rounded-2xl p-4 mb-3">
            <i className="fas fa-poll-h text-3xl text-blue-600"></i>
          </div>
          <h1 className="text-2xl font-bold">Survey Pro</h1>
        </div>

        {/* Contenido principal */}
        <main className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-md flex justify-center">
            <Outlet />
          </div>
        </main>

        {/* Footer 
        <footer className="p-6 text-center text-sm text-gray-500 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-center gap-6 mb-3">
            <a href="#" className="hover:text-blue-600 transition-colors">Términos</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Soporte</a>
          </div>
          <p>© 2024 Survey Master. Todos los derechos reservados.</p>
        </footer>
        */}
      </div>
    </div>
  );
};

export default PublicLayout;