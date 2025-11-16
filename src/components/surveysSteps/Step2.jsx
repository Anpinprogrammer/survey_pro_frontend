import React from 'react'

const Step2 = ({ onComplete, onBack, initialData }) => {

  return (
    <>
        <div className=" bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6" id="step-2">
        <h2 className="text-xl font-semibold mb-4">Preguntas de la encuesta</h2>
        
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="flex">
            <div className="shrink-0">
              <i className="fas fa-info-circle text-blue-400"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Puedes crear diferentes tipos de preguntas. Arrastra para reordenar las preguntas.
              </p>
            </div>
          </div>
        </div>
        
        <div id="questions-container" className="space-y-4">
          {/**Questions will be added here */} 
        </div>
        
        <div className="mt-6 border-t pt-6">
          <button id="add-question" class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <i className="fas fa-plus mr-2"></i> Añadir pregunta
          </button>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button id="prev-step-2" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <i className="fas fa-arrow-left mr-2"></i> Anterior
          </button>
          <button id="next-step-2" class="btn-primary px-4 py-2 rounded-md shadow-sm">
            Siguiente <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Step2