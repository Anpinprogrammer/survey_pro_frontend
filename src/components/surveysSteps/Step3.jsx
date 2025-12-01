import { useState, useEffect } from 'react'
import LinkDistribution from './LinkDistribution'
import EmailDistribution from './EmailDistribution'
import SpecificDistribution from './SpecificDistribution'
import DepartmentDistribution from './DepartmentDistribution'

const Step3 = ({ onComplete, onBack, initialData, id }) => {


  const [respondents, setRespondents] = useState({
    distributionMethod: initialData?.distributionMethod || "link",
    methodInfo: initialData?.methodInfo || "",
    notificationOptions: initialData?.notificationOptions || {
      atSurveyBegin: false,
      automaticReminders: false,
      atSurveyCompletion: false
    }
  })
  const [linkDistribution, setLinkDistribution] = useState(initialData?.distributionMethod === 'link' || respondents?.distributionMethod === 'link' ? true : false)
  const [emailDistribution, setEmailDistribution] = useState( initialData?.distributionMethod === 'email' ? true : false)
  const [specificDistribution, setSpecificDistribution] = useState(initialData?.distributionMethod === 'specific' ? true : false)
  const [departmentDistribution, setDepartmentDistribution] = useState(initialData?.distributionMethod === 'department' ? true : false)

  const [isEmail, setIsEmail] = useState(false)
  const [isNotValidDepartment, setIsNotValidDepartment] = useState(false)

  const [info, setInfo] = useState({})

  useEffect(() => {
    const updateInfo = () => {
      handleMethodInfo(info)
    }
    updateInfo()
  }, [info])



  const handleSelected = (e) => {
    const { name, value } = e.target

    if(value === 'link'){
      setLinkDistribution(true)
      setEmailDistribution(false)
      setSpecificDistribution(false)
      setDepartmentDistribution(false)
      setIsEmail(false)
      setIsNotValidDepartment(false)
    } else if (value === 'email') {
      setLinkDistribution(false)
      setEmailDistribution(true)
      setSpecificDistribution(false)
      setDepartmentDistribution(false)
      setIsEmail(true)
      setIsNotValidDepartment(false)
    } else if (value === 'specific') {
      setLinkDistribution(false)
      setEmailDistribution(false)
      setSpecificDistribution(true)
      setDepartmentDistribution(false)
      setIsEmail(false)
      setIsNotValidDepartment(false)
    } else if (value === 'department') {
      setLinkDistribution(false)
      setEmailDistribution(false)
      setSpecificDistribution(false)
      setDepartmentDistribution(true)
      setIsEmail(false)
      setIsNotValidDepartment(true)
    }
    setRespondents(prev => (
      {
        ...prev,
        [name] : value
      }
    ))
  }

  const handleCheck = (e) => {
    const { name, checked } = e.target

    setRespondents(prev => ({
      ...prev,
      notificationOptions: {
        ...prev.notificationOptions,
        [name] : checked
      }
    }))
  }

  const handleMethodInfo = (info) => {
    setRespondents(prev => ({
      ...prev,
      methodInfo: info
    }))
  }

  const handleSubmit = () => {

    onComplete({
      respondents
    })
  }

  return (
    <>
        <div className=" bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6" id="step-3">
        <h2 className="text-xl font-semibold mb-4">Asignar Participantes</h2>
        
        <div className="mb-6">
          <label htmlFor="distribution-method" className="block text-sm font-medium text-gray-700 mb-1">Método de distribución</label>
          <select 
            id="distribution-method" 
            name='distributionMethod'
            className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={respondents.distributionMethod}
            onChange={handleSelected}  
          >
            <option value="link">Enlace público</option>
            <option value="email">Envío por correo electrónico</option>
            <option value="specific">Usuarios específicos</option>
            <option value="department">Por departamento</option>
          </select>
        </div>

        <LinkDistribution selected={linkDistribution} id={id} setInfo={setInfo} />
        
        <EmailDistribution  selected={emailDistribution} setInfo={setInfo} setIsEmail={setIsEmail} initialData={initialData?.distributionMethod === 'email' ? initialData.methodInfo : ''}/>

        <SpecificDistribution  selected={specificDistribution}/>

        <DepartmentDistribution selected={departmentDistribution} setInfo={setInfo} initialData={initialData?.distributionMethod === 'department' ? initialData.methodInfo : ''} setIsNotValidDepartment={setIsNotValidDepartment} />
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Opciones de notificación</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                id="notify-start" 
                type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                name='atSurveyBegin'
                checked={respondents.notificationOptions.atSurveyBegin}
                onChange={handleCheck}
              />
              <label htmlFor="atSurveyBegin" className="ml-3 block text-sm text-gray-700">Notificar al iniciar la encuesta</label>
            </div>
            <div className="flex items-center">
              <input 
                id="notify-reminder" 
                type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                name='automaticReminders'
                checked={respondents.notificationOptions.automaticReminders}
                onChange={handleCheck}
              />
              <label htmlFor="notify-reminder" className="ml-3 block text-sm text-gray-700">Enviar recordatorios automáticos</label>
            </div>
            <div className="flex items-center">
              <input 
                id="notify-completion" 
                type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                name='atSurveyCompletion'
                checked={respondents.notificationOptions.atSurveyCompletion}
                onChange={handleCheck}
              />
              <label htmlFor="notify-completion" className="ml-3 block text-sm text-gray-700">Notificar al completar la encuesta</label>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button id="prev-step-3" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" onClick={onBack}>
            <i className="fas fa-arrow-left mr-2"></i> Anterior
          </button>
          <button id="next-step-3" className={`px-4 py-2 rounded-md shadow-sm ${isEmail || isNotValidDepartment ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'btn-primary hover:bg-blue-600 cursor-pointer'} `} onClick={handleSubmit} disabled={isEmail || isNotValidDepartment} >
            Siguiente <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Step3