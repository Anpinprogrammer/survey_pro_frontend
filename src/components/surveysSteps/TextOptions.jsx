import { useState } from 'react'

const TextOptions = ({ selected }) => {

  const [rows, setRows] = useState(3)

  return (
    <>
        <div className={`question-options ${selected ? 'block' : 'hidden'} `} id="text-options">
          <div className="mb-4">
            <label htmlFor="text-format" className="block text-sm font-medium text-gray-700 mb-1">Formato de texto</label>
            <select id="text-format" className="form-select block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option value="single-line">Línea única</option>
              <option value="multi-line">Múltiples líneas</option>
              <option value="email">Correo electrónico</option>
              <option value="number">Número</option>
            </select>
          </div>
          
          <div id="text-multiline-options" className="hidden">
            <label htmlFor="text-rows" className="block text-sm font-medium text-gray-700 mb-1">Número de filas</label>
            <input type="number" id="text-rows" className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={rows} onChange={e => setRows(e.target.value)} />
          </div>
        </div>
    </>
  )
}

export default TextOptions