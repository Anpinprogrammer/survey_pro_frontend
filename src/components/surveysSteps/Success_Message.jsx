import React from 'react'

const Success_Message = () => {
  return (
    <>
        <div class="hidden bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center" id="publish-success">
        <div class="mb-4">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <i class="fas fa-check-circle text-2xl text-green-600"></i>
          </div>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">¡Encuesta publicada con éxito!</h3>
        <p class="text-gray-500 mb-6">Tu encuesta ha sido publicada y está lista para ser distribuida.</p>
        <div class="flex justify-center space-x-4">
          <button id="view-survey" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Ver encuesta
          </button>
          <button id="back-to-dashboard-after-publish" class="btn-primary px-4 py-2 rounded-md shadow-sm">
            Volver al dashboard
          </button>
        </div>
      </div>
    </>
  )
}

export default Success_Message