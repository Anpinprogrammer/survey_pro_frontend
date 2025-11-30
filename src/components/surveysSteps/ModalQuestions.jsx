// ModalQuestions.jsx
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useUIStore } from '../../store/uiStore'
import MultipleChoice from './MultipleChoice'
import RatingScale from './RatingScale'
import TextOptions from './TextOptions'
import { iconText } from '../../helpers'

const ModalQuestions = ({ onClose, setQuestions, questions }) => {
  
  const closeModal = onClose || useUIStore(s => s.closeModal)
  const [question, setQuestion] = useState({
    id: 'q' + Date.now(),
    questionText: '',
    questionType: 'multiple-choice',
    typeIcon: 'fa-circle-dot',
    typeText: 'Opción múltiple',
    isRequired: false,
    questionDescription: '',
    options: [""]
  })
  const [alertQuestion, setAlertQuestion] = useState("")
  const [isRequired, setIsRequired] = useState(false)  
  const [type, setType] = useState()
  const [multipleChoice, setMultipleChoice] = useState(true)
  const [textOptions, setTextOptions] = useState(false)
  const [ratingScale, setRatingScale] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeModal])

  const setOptions = (newOptions) => {
    setQuestion(prev => ({
      ...prev,
      options: newOptions
    }))
  }

  const handleQuestion = (e) => {
    const { name, type, checked, value } = e.target
    const newValue = type === 'checkbox' ? checked : value

    setQuestion(prev => ({
      ...prev,
      [name]: newValue
    }))


  }

  const handleSelected = async (e) => {
    const { name, value } = e.target
    if(value === 'rating') {
      setMultipleChoice(false)
      setTextOptions(false)
      setRatingScale(true)
    } else if (value === 'text') {
      setMultipleChoice(false)
      setTextOptions(true)
      setRatingScale(false)
    } else {
      setMultipleChoice(true)
      setTextOptions(false)
      setRatingScale(false)
    }

    const result = iconText(value)
    const { typeIcon, typeText } = result
    

    setQuestion( prev => ({
      ...prev,
      [name]: value,
      typeIcon,
      typeText
    }))
  }

  const handleQuestions = () => {
    if(!question){
      setAlertQuestion("Este campo es obligatorio")
      return
    }
    setAlertQuestion("")
    console.log('Agregando pregunta...')
    setQuestions([
      ...questions,
      question
    ])
    closeModal()
  }

  const modalContent = (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop: z menor que el modal */}
      <div
        className="absolute inset-0"
        // usa Tailwind si funciona, sino el style rgba como fallback
        style={{ background: 'rgba(0,0,0,0.5)' }}
        // si tu Tailwind soporta el shorthand: className="absolute inset-0 bg-black/50"
        onClick={closeModal}
      />

      {/* Modal box: z mayor que el backdrop */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl bg-white">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">Añadir pregunta</h3>
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={closeModal}
            aria-label="Cerrar modal"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="p-6">
          {/* ... contenido del modal ... */}
          <div className="mb-4">
            <label htmlFor="question-text" className="block text-sm font-medium text-gray-700 mb-1">
              Texto de la pregunta *
            </label>
            <input
              type="text"
              id="question-text"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name='questionText'
              value={question.questionText}
              onChange={handleQuestion}
              placeholder="Ej: ¿Cómo calificarías nuestro servicio?"
            />
            {alertQuestion && 
              <p className='text-red-600' >{alertQuestion}</p>
            }
          </div>

          <div className="mb-4">
          <label htmlFor="question-type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de pregunta *</label>
          <select 
            id="question-type" 
            name="questionType"
            className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
            onChange={handleSelected} >
            <option value="multiple-choice">Opción múltiple</option>
            <option value="checkbox">Casillas de verificación</option>
            <option value="text">Texto abierto</option>
            <option value="rating">Escala de valoración</option>
            <option value="yes-no">Sí/No</option>
            <option value="dropdown">Desplegable</option>
          </select>
        </div>

        {/**Multiple choice options (shown by default) */}
        <MultipleChoice 
          selected={multipleChoice} 
          options={question.options}
          setOptions={setOptions}
        />

        {/**Rating scale options (initially hidden) */} 
        <RatingScale selected={ratingScale} />

        {/**Text options (initially hidden) */}
        <TextOptions selected={textOptions} />


        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="question-required" 
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
              name='isRequired'
              checked={question.isRequired}
              onChange={handleQuestion} />
            <label htmlFor="question-required" className="ml-2 block text-sm text-gray-700">Esta pregunta es obligatoria</label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="question-description" className="block text-sm font-medium text-gray-700 mb-1">Descripción (opcional)</label>
              <input 
                type="text" 
                id="question-description" 
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                placeholder="Instrucciones adicionales para los encuestados" />
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-end">
          <button onClick={closeModal} className="px-4 py-2 border rounded-md mr-3">
            Cancelar
          </button>
          <button className="btn-primary px-4 py-2 rounded-md" onClick={handleQuestions} >Añadir pregunta</button>
        </div>
      </div>
    </div>
  )

  const portalRoot = document.getElementById('modal-root')
  if (portalRoot) return createPortal(modalContent, portalRoot)
  return modalContent
}

export default ModalQuestions
