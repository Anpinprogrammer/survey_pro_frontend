import { useState, useEffect } from 'react'

const EmailDistribution = ({ selected, setInfo, setIsEmail, initialData }) => {


  const [emails, setEmails] = useState(initialData?.emails || [])
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState(initialData?.message || "")

  useEffect(() => {
    const updateEmail = () => {
      if(selected) {
        setInfo({ emails, message })
        emails.length && message ? setIsEmail(false) : setIsEmail(true)
      }
    } 
    updateEmail()
  }, [emails, message])

  const handleBlur = () => {
    if (!inputValue.trim()) return

    const newEmails = inputValue
      .split(",")                 // separar por comas
      .map(e => e.trim())         // limpiar espacios
      .filter(e => e.length > 0)  // quitar vacíos
      .filter(e => !emails.includes(e)) // evitar duplicados

    setEmails([...emails, ...newEmails])
    setInputValue("") // limpiar textarea
  }

  // Función para eliminar un email
  const removeEmail = (emailToRemove) => {
    setEmails(prev => prev.filter(email => email !== emailToRemove))
  }

  return (
    <>
        <div id="email-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Direcciones de correo electrónico</label>
            
            {/* LISTA DE EMAILS (chips) */}
            <div className="flex flex-wrap gap-2 mb-3">
              {emails.map((email) => (
                <div key={email} className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <span className="mr-2">{email}</span>
                  <button
                    type="button"
                    onClick={() => removeEmail(email)}
                    aria-label={`Eliminar ${email}`}
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full hover:bg-blue-200 focus:outline-none"
                    title="Eliminar"
                  >
                    {/* Icono simple "x" */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <textarea 
              rows="3" 
              placeholder="Ingresa las direcciones de correo electrónico separadas por comas" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onBlur={handleBlur}
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">Se enviará un correo electrónico con un enlace único a cada destinatario.</p>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje personalizado (opcional)</label>
            <textarea 
              rows="3" 
              placeholder="Añade un mensaje personalizado al correo electrónico" 
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
    </>
  )
}

export default EmailDistribution