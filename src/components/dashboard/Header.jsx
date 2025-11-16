import React from 'react'
import { useUIStore } from '../../store/uiStore'

const Header = () => {

    const { toggleOpen } = useUIStore()

  return (
    <>
        <header className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-500">Bienvenido a tu panel de encuestas</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <button id="new-survey-btn" className="btn-primary px-4 py-2 rounded-md shadow-sm flex items-center" onClick={toggleOpen}>
                    <i className="fas fa-plus-circle mr-2"></i> Nueva encuesta
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header