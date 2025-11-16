import React from 'react'

const Step4 = () => {
  return (
    <>
        <div class="hidden bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6" id="step-4">
        <h2 class="text-xl font-semibold mb-4">Vista previa y publicación</h2>
        
        <div class="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="shrink-0">
              <i class="fas fa-exclamation-triangle text-yellow-400"></i>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                Revisa cuidadosamente tu encuesta antes de publicarla. Una vez publicada, solo podrás hacer cambios limitados.
              </p>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Detalles de la encuesta</h3>
          <div class="bg-gray-50 p-4 rounded-md">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt class="text-sm font-medium text-gray-500">Título</dt>
                <dd class="mt-1 text-sm text-gray-900" id="preview-title">Encuesta de satisfacción del cliente Q1</dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500">Tipo</dt>
                <dd class="mt-1 text-sm text-gray-900" id="preview-type">Cliente (Externa)</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Descripción</dt>
                <dd class="mt-1 text-sm text-gray-900" id="preview-description">Evaluación de satisfacción trimestral para clientes activos.</dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500">Preguntas</dt>
                <dd class="mt-1 text-sm text-gray-900" id="preview-questions">12 preguntas (3 obligatorias)</dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500">Fecha de expiración</dt>
                <dd class="mt-1 text-sm text-gray-900" id="preview-expiry">15/03/2025</dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500">Distribución</dt>
                <dd class="mt-1 text-sm text-gray-900" id="preview-distribution">Envío por correo a 54 destinatarios</dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-medium text-gray-900">Vista previa de la encuesta</h3>
            <button class="text-sm text-blue-600 hover:text-blue-800 font-medium">Abrir en nueva ventana</button>
          </div>
          <div class="border rounded-md overflow-hidden">
            <div class="bg-gray-100 border-b p-3 flex items-center justify-between">
              <div class="text-sm font-medium">Vista previa</div>
              <div class="text-xs text-gray-500">Las respuestas en modo vista previa no se guardan</div>
            </div>
            <div class="bg-white p-4 h-96 overflow-y-auto" id="survey-preview-container">
              {/**Survey preview will be rendered here*/}
              <div class="text-center p-8 text-gray-500">
                <i class="fas fa-eye fa-3x mb-2"></i>
                <p>Cargando vista previa...</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex justify-between items-center">
          <button id="prev-step-4" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <i class="fas fa-arrow-left mr-2"></i> Anterior
          </button>
          
          <div class="flex space-x-4">
            <button id="save-draft" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Guardar como borrador
            </button>
            <button id="publish-survey" class="btn-accent px-6 py-2 rounded-md shadow-sm flex items-center">
              <i class="fas fa-paper-plane mr-2"></i> Publicar encuesta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step4