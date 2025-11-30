import { useState } from "react"

const Step1 = ({ onComplete, initialData }) => {

   const [formData, setFormData] = useState(() => ({
      title: initialData?.title || "",
      description: initialData?.description || "",
      tipo: initialData?.tipo || "",
      fecha: initialData?.fecha || Date.now(),
      anonymousResponses: false,
      oneResponsePerUser: false,
      showProgress: false
    }));
    const [alertTitle, setAlertTitle] = useState("")
    const [alertDescription, setAlertDescription] = useState("")
    const [alertTipo, setAlertTipo] = useState("")
    const [alertFecha, setAlertFecha] = useState("")

    function esAlMenos10DiasDespues(fecha) {
      const hoy = new Date();
      const fechaLimite = new Date();

      // Sumar 10 días a la fecha actual
      fechaLimite.setDate(hoy.getDate() + 10);

      // Convertir la entrada a Date (si es string)
      const fechaIngresada = new Date(fecha);

      return fechaIngresada >= fechaLimite;
    }

    const handleOptions = (e) => {
        const { name, checked } = e.target

        setFormData({
          ...formData,
          [name]: checked
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
         
        // Validar datos
        if (!formData.title) {
            setAlertTitle('El título es obligatorio')
        } else {
          setAlertTitle("")
        }
        if(!formData.description) {
            setAlertDescription('La descripcion es obligatoria')
        } else {
          setAlertDescription("")
        }
        
        if(!formData.tipo) {
          setAlertTipo('Al menos una opcion adicional debe ser seleccionada')
        } else {
          setAlertTipo("")
        }
        
        if(!esAlMenos10DiasDespues(formData.fecha)){
          setAlertFecha("La fecha de expiracion debe ser al menos 10 dias despues del dia de hoy")
          return
        }
        setAlertFecha("")

        // Pasar datos al componente padre y avanzar
        onComplete({ basicInfo: formData })
    }


  return (
    <>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6" id="step-1">
            <h2 className="text-xl font-semibold mb-4">Información básica de la encuesta</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="survey-title" className="block text-sm font-medium text-gray-700 mb-1">Título de la encuesta *</label>
            <input 
              type="text" 
              id="survey-title" 
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Ej: Encuesta de satisfacción de clientes Q1"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
            {alertTitle && 
              (
                <p className="text-red-600 mt-2">{alertTitle}</p>
              )
            }
          </div>
          
          <div>
            <label htmlFor="survey-description" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea 
              id="survey-description" 
              rows="3" 
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Describe brevemente el propósito de esta encuesta"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
              {alertDescription && 
              (
                <p className="text-red-600 mt-2">{alertDescription}</p>
              )
            }
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="survey-type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de encuesta *</label>
              <select 
                id="survey-type" 
                className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              >
                <option value="">Selecciona un tipo</option>
                <option value="internal">Interna (empleados)</option>
                <option value="external">Externa (clientes)</option>
                <option value="mixed">Mixta</option>
              </select>
              {alertTipo && (
              <p className="text-red-600 mt-2">{alertTipo}</p>
            )}
            </div>
            
            <div>
              <label htmlFor="survey-expiry" className="block text-sm font-medium text-gray-700 mb-1">Fecha de expiración</label>
              <input 
                type="date" 
                id="survey-expiry" 
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                value={new Date(formData.fecha).toISOString().split("T")[0] }
                onChange={(e) => setFormData({...formData, fecha: e.target.value})}
              />
              {alertFecha && 
              (
                <p className="text-red-600 mt-2">{alertFecha}</p>
              )
            }
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Opciones adicionales</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  id="anonymousResponses" 
                  name="anonymousResponses" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  checked={formData.anonymousResponses}
                  onChange={handleOptions}
                />
                <label htmlFor="anonymousResponses" className="ml-2 block text-sm text-gray-700">Permitir respuestas anónimas</label>
              </div>
              <div className="flex items-center">
                <input 
                  id="oneResponsePerUser" 
                  name="oneResponsePerUser" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  checked={formData.oneResponsePerUser}
                  onChange={handleOptions}
                />
                <label htmlFor="oneResponsePerUser" className="ml-2 block text-sm text-gray-700">Limitar a una respuesta por usuario</label>
              </div>
              <div className="flex items-center">
                <input 
                  id="showProgress" 
                  name="showProgress" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  checked={formData.showProgress}
                  onChange={handleOptions}
                />
                <label htmlFor="showProgress" className="ml-2 block text-sm text-gray-700">Mostrar barra de progreso a los encuestados</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button 
            id="next-step-1" 
            className="btn-primary px-4 py-2 rounded-md shadow-sm"
            onClick={handleSubmit}
          >
            Siguiente <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Step1