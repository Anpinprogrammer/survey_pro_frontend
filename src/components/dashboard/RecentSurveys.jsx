import React from 'react'

const RecentSurveys = () => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Encuestas recientes</h3>
          <a href="javascript:void(0)" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver todas</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Respuestas</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Creada</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-6 text-sm font-medium text-gray-900">Satisfacción del cliente Q1</td>
                <td className="py-3 px-6 text-sm text-gray-500">Cliente</td>
                <td className="py-3 px-6 text-sm text-gray-500">87</td>
                <td className="py-3 px-6 text-sm text-gray-500">08/01/2025</td>
                <td className="py-3 px-6">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Activa</span>
                </td>
                <td className="py-3 px-6 text-sm font-medium">
                  <div className="flex space-x-2">
                    <a href="javascript:void(0)" className="text-blue-600 hover:text-blue-900">Ver</a>
                    <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                    <a href="javascript:void(0)" className="text-red-600 hover:text-red-900">Eliminar</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-sm font-medium text-gray-900">Clima laboral departamento IT</td>
                <td className="py-3 px-6 text-sm text-gray-500">Interno</td>
                <td className="py-3 px-6 text-sm text-gray-500">32</td>
                <td className="py-3 px-6 text-sm text-gray-500">15/01/2025</td>
                <td className="py-3 px-6">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Activa</span>
                </td>
                <td className="py-3 px-6 text-sm font-medium">
                  <div className="flex space-x-2">
                    <a href="javascript:void(0)" className="text-blue-600 hover:text-blue-900">Ver</a>
                    <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                    <a href="javascript:void(0)" className="text-red-600 hover:text-red-900">Eliminar</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-sm font-medium text-gray-900">Evaluación nuevo software</td>
                <td className="py-3 px-6 text-sm text-gray-500">Interno</td>
                <td className="py-3 px-6 text-sm text-gray-500">56</td>
                <td className="py-3 px-6 text-sm text-gray-500">22/01/2025</td>
                <td className="py-3 px-6">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>
                </td>
                <td className="py-3 px-6 text-sm font-medium">
                  <div className="flex space-x-2">
                    <a href="javascript:void(0)" className="text-blue-600 hover:text-blue-900">Ver</a>
                    <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                    <a href="javascript:void(0)" className="text-red-600 hover:text-red-900">Eliminar</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-sm font-medium text-gray-900">Retroalimentación producto nuevo</td>
                <td className="py-3 px-6 text-sm text-gray-500">Cliente</td>
                <td className="py-3 px-6 text-sm text-gray-500">112</td>
                <td className="py-3 px-6 text-sm text-gray-500">29/01/2025</td>
                <td className="py-3 px-6">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Finalizada</span>
                </td>
                <td className="py-3 px-6 text-sm font-medium">
                  <div className="flex space-x-2">
                    <a href="javascript:void(0)" className="text-blue-600 hover:text-blue-900">Ver</a>
                    <a href="javascript:void(0)" className="text-gray-400 cursor-not-allowed">Editar</a>
                    <a href="javascript:void(0)" className="text-red-600 hover:text-red-900">Eliminar</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-sm font-medium text-gray-900">Evaluación capacitación ventas</td>
                <td className="py-3 px-6 text-sm text-gray-500">Interno</td>
                <td className="py-3 px-6 text-sm text-gray-500">24</td>
                <td className="py-3 px-6 text-sm text-gray-500">03/02/2025</td>
                <td className="py-3 px-6">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Activa</span>
                </td>
                <td className="py-3 px-6 text-sm font-medium">
                  <div className="flex space-x-2">
                    <a href="javascript:void(0)" className="text-blue-600 hover:text-blue-900">Ver</a>
                    <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                    <a href="javascript:void(0)" className="text-red-600 hover:text-red-900">Eliminar</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default RecentSurveys