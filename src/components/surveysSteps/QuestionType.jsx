import React from "react"

export const formatQuestions = (questionType, questionText, isRequired, index) => {
  const requiredMark = isRequired ? <span className="text-red-500">*</span> : null

  const base = (
    <div className="mb-6 pb-6 border-b" key={index}>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {index + 1}. {questionText} {requiredMark}
      </label>

      {/* Aquí va la parte que cambia según questionType */}
      {{
        "multiple-choice": (
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" name={`q${index}`} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
              <label className="ml-3 block text-sm text-gray-700">Opción 1</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name={`q${index}`} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
              <label className="ml-3 block text-sm text-gray-700">Opción 2</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name={`q${index}`} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
              <label className="ml-3 block text-sm text-gray-700">Opción 3</label>
            </div>
          </div>
        ),
        "checkbox": (
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-3 block text-sm text-gray-700">Opción 1</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-3 block text-sm text-gray-700">Opción 2</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-3 block text-sm text-gray-700">Opción 3</label>
            </div>
          </div>
        ),
        "text": (
          <input
            type="text"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Tu respuesta"
          />
        ),
        "rating": (
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-sm text-gray-500">Bajo</span>
            <div className="flex space-x-1">
              {[1,2,3,4,5].map(n => (
                <button key={n} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {n}
                </button>
              ))}
            </div>
            <span className="text-sm text-gray-500">Alto</span>
          </div>
        ),
        "yes-no": (
          <div className="flex items-center space-x-4 mt-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">Sí</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">No</button>
          </div>
        ),
        "dropdown": (
          <select className="form-select block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="">Seleccione una opción</option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
            <option value="3">Opción 3</option>
          </select>
        )
      }[questionType]}

    </div>
  )

  return base
}
