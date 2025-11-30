import { useState } from 'react'

const RatingScale = ({ selected }) => {

  const [minValue, setMinValue] = useState(1)
  const [maxValue, setMaxValue] = useState(5)

  return (
    <>
        <div className={`question-options ${selected ? 'block' : 'hidden'} `} id="rating-options">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="rating-min" className="block text-sm font-medium text-gray-700 mb-1">Valor mínimo</label>
              <input type="number" id="rating-min" className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={minValue}  onChange={e => setMinValue(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="rating-max" className="block text-sm font-medium text-gray-700 mb-1">Valor máximo</label>
              <input type="number" id="rating-max" className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={maxValue} onChange={e => setMaxValue(e.target.value)} />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="rating-min-label" className="block text-sm font-medium text-gray-700 mb-1">Etiqueta mínima (opcional)</label>
              <input type="text" id="rating-min-label" className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Ej: Muy malo" />
            </div>
            <div>
              <label htmlFor="rating-max-label" className="block text-sm font-medium text-gray-700 mb-1">Etiqueta máxima (opcional)</label>
              <input type="text" id="rating-max-label" className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Ej: Excelente" />
            </div>
          </div>
        </div>
    </>
  )
}

export default RatingScale