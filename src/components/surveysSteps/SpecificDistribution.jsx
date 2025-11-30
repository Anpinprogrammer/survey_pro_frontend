import React from 'react'

const SpecificDistribution = ({ selected }) => {
  return (
    <>
        <div id="specific-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Buscar usuarios</label>
            <div className="relative">
              <input type="text" placeholder="Buscar por nombre o correo electrónico" className="form-input pl-10 pr-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Usuarios seleccionados</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white p-2 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">LP</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Laura Pérez</p>
                    <p className="text-xs text-gray-500">laura.perez@empresa.com</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">CM</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Carlos Mendoza</p>
                    <p className="text-xs text-gray-500">carlos.mendoza@empresa.com</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SpecificDistribution