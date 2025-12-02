import { Link, useLocation, useNavigate  } from "react-router-dom"

const Nav = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

  return (
    <>
        {/**Mobile menu toggle  */}
        <div className="fixed top-4 left-4 z-50 lg:hidden">
            <button id="mobile-toggle" className="p-2 bg-white rounded-md shadow-md">
                <i className="fas fa-bars text-gray-600"></i>
            </button>
        </div>
        <aside id="sidebar" className="sidebar bg-white shadow-lg fixed h-screen overflow-y-auto">
            <div className="flex items-center justify-between px-4 border-b">
                <div className="flex items-center space-x-3">
                    <img src="/img/logo2.png" alt="Logo" className="w-48 h-32" />

                    {/**
                     * <span className="logo-text font-bold text-xl text-gray-800">SurveyPro</span>
                     */}
                    
                </div>
                <button id="sidebar-toggle" className="lg:block hidden">
                    <i className="fas fa-chevron-left text-gray-600"></i>
                </button>
            </div>
    
            <nav className="py-4">
                <ul>
                    <li>
                        <Link to={'/auth'} className={`${location.pathname === '/auth' && 'active'} sidebar-item flex items-center px-4 py-3 hover:bg-gray-100`}>
                            <i className="fas fa-tachometer-alt w-6"></i>
                            <span className="sidebar-item-text ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/auth/surveys'} className={`${location.pathname === '/auth/surveys' && 'active'} sidebar-item flex items-center px-4 py-3 hover:bg-gray-100`}>
                            <i className="fas fa-poll w-6"></i>
                            <span className="sidebar-item-text ml-3">Encuestas</span>
                        </Link>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i className="fas fa-chart-bar w-6"></i>
                            <span className="sidebar-item-text ml-3">Informes</span>
                        </a>
                    </li>
                    <li className="admin-only">
                        <a href="javascript:void(0)" className="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i className="fas fa-users w-6"></i>
                            <span className="sidebar-item-text ml-3">Usuarios</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="sidebar-item flex items-center px-4 py-3 hover:bg-gray-100">
                            <i className="fas fa-cog w-6"></i>
                            <span className="sidebar-item-text ml-3">Configuración</span>
                        </a>
                    </li>
                </ul>
            </nav>
    
            <div className="mt-auto p-4 border-t">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <span className="font-bold" id="user-initials">JP</span>
                    </div>
                    <div className="ml-3">
                        <p className="font-medium text-gray-900" id="user-name">Juan Pérez</p>
                        <p className="text-sm text-gray-500" id="user-role">Administrador</p>
                    </div>
                </div>
                <button className="mt-3 w-full flex items-center justify-center px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt mr-2"></i> Cerrar sesión
                </button>
            </div>
        </aside>
    </>
  )
}

export default Nav