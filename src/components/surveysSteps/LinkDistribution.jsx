import React from 'react'

const LinkDistribution = ({ selected }) => {
  return (
    <>
        <div id="link-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div className="flex items-center bg-gray-50 p-3 rounded-md">
            <input type="text" value="https://encuestas.empresa.com/s/abc123" readOnly className="flex-1 bg-transparent border-0 focus:ring-0" />
            <button className="ml-2 px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 focus:outline-none">
              <i className="far fa-copy mr-1"></i> Copiar
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Este enlace puede ser compartido con cualquier persona. No se requiere autenticación.</p>
        </div>
    </>
  )
}

export default LinkDistribution