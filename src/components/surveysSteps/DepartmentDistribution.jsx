import React from 'react'

const DepartmentDistribution = ({ selected }) => {
  return (
    <>
        <div id="department-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div className="space-y-3">
            <div className="flex items-center">
              <input id="dept-marketing" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="dept-marketing" className="ml-3 block text-sm text-gray-700">Marketing (12 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-sales" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="dept-sales" className="ml-3 block text-sm text-gray-700">Ventas (24 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-it" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="dept-it" className="ml-3 block text-sm text-gray-700">TI (18 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-hr" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="dept-hr" className="ml-3 block text-sm text-gray-700">Recursos Humanos (8 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-finance" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="dept-finance" className="ml-3 block text-sm text-gray-700">Finanzas (14 usuarios)</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default DepartmentDistribution