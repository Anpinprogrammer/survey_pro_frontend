import React from 'react'

const EmailDistribution = ({ selected }) => {
  return (
    <>
        <div id="email-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Direcciones de correo electrónico</label>
            <textarea rows="3" placeholder="Ingresa las direcciones de correo electrónico separadas por comas" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            <p className="mt-1 text-sm text-gray-500">Se enviará un correo electrónico con un enlace único a cada destinatario.</p>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje personalizado (opcional)</label>
            <textarea rows="3" placeholder="Añade un mensaje personalizado al correo electrónico" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>
        </div>
    </>
  )
}

export default EmailDistribution