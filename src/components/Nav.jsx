import React from 'react'

const Nav = () => {
  return (
    <>
        <aside id="sidebar" className="sidebar bg-white shadow-lg fixed h-screen overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-2 border-b">
                <div className="flex items-center space-x-3">
                    <img src="img/logo2.png" alt="Logo" className="w-48 h-32" />

                    {/**
                     * <span className="logo-text font-bold text-xl text-gray-800">SurveyPro</span>
                     */}
                    
                </div>
                <button id="sidebar-toggle" class="lg:block hidden">
                    <i class="fas fa-chevron-left text-gray-600"></i>
                </button>
            </div>
    
            <nav class="py-4">
                <ul>
                    <li>
                        <a href="javascript:void(0)" class="sidebar-item active flex items-center px-4 py-3 hover:bg-gray-100">
                            <i class="fas fa-tachometer-alt w-6"></i>
                            <span class="sidebar-item-text ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i class="fas fa-poll w-6"></i>
                            <span class="sidebar-item-text ml-3">Encuestas</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i class="fas fa-chart-bar w-6"></i>
                            <span class="sidebar-item-text ml-3">Informes</span>
                        </a>
                    </li>
                    <li class="admin-only">
                        <a href="javascript:void(0)" class="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i class="fas fa-users w-6"></i>
                            <span class="sidebar-item-text ml-3">Usuarios</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i class="fas fa-cog w-6"></i>
                            <span class="sidebar-item-text ml-3">Configuración</span>
                        </a>
                    </li>
                </ul>
            </nav>
    
            <div class="mt-auto p-4 border-t">
                <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <span class="font-bold" id="user-initials">JP</span>
                    </div>
                    <div class="ml-3">
                        <p class="font-medium text-gray-900" id="user-name">Juan Pérez</p>
                        <p class="text-sm text-gray-500" id="user-role">Administrador</p>
                    </div>
                </div>
                <button class="mt-3 w-full flex items-center justify-center px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    <i class="fas fa-sign-out-alt mr-2"></i> Cerrar sesión
                </button>
            </div>
        </aside>
    </>
  )
}

export default Nav