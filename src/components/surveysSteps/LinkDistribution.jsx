import { useState, useEffect } from 'react'

const LinkDistribution = ({ selected, id, setInfo }) => {


  const finalLink = `https://encuestas.empresa.com/s/${id}`

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const updateLink = () => {
      if(selected) {
        setInfo(finalLink)
      }
    }
    updateLink()
     
  }, [selected])

  const handleCopy = () => {
    navigator.clipboard.writeText(finalLink)
    setCopied(true)

    setTimeout(() => setCopied(false), 3000)
  }


  return (
    <>
        <div id="link-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div className="flex items-center bg-gray-50 p-3 rounded-md">
            <input type="text" value={finalLink} readOnly className="flex-1 bg-transparent border-0 focus:ring-0" />
            <button className="ml-2 px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 focus:outline-none cursor-pointer" onClick={handleCopy}>
              <i className="far fa-copy mr-1"></i> Copiar
            </button>
          </div>
          {copied && (
            <p className="mt-2 text-sm text-green-600">
              ✔ Enlace copiado al portapapeles
            </p>
          )}
          <p className="mt-2 text-sm text-gray-500">Este enlace puede ser compartido con cualquier persona. No se requiere autenticación.</p>
        </div>
    </>
  )
}

export default LinkDistribution