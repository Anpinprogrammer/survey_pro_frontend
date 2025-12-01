import React, { useState, useEffect } from 'react'
import ModalQuestions from './ModalQuestions'
import { useUIStore } from '../../store/uiStore'

const Step2 = ({ onComplete, onBack, initialData }) => {
  

  const { isModalOpen, toggleModal, openModal, closeModal } = useUIStore()
  const [questions, setQuestions] = useState(initialData || [])
  const [alertQeustions, setAlertQuestions] = useState("")

  const handleSubmit = () => {
    if(!questions.length){
      setAlertQuestions('* Debe agregar las preguntas de la encuesta para avanzar')
      return
    }
    setAlertQuestions("")
    onComplete({
      questions
    })
  }

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
        
        
        { questions.length ? (
          <div id="questions-container" className="space-y-4">
            { questions.map( (question, index) => (
              <div key={index} className="question-item" data-id={question.id} data-type={question.questionType} data-required={question.isRequired} >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="question-handle fas fa-grip-vertical mr-3"></i>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {question.questionText}
                        {question.isRequired && <span className="ml-2 text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded">Obligatoria</span> }
                      </h3>
                      {question.questionDescription ? `<p className="text-sm text-gray-500">${question.questionDescription}</p>` : ''}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 flex items-center"><i className={`fas ${question.typeIcon} mr-1`}></i> {question.typeText}</span>
                    <button className="edit-question p-1 text-gray-400 hover:text-blue-500">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="delete-question p-1 text-gray-400 hover:text-red-500">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))

            }
          </div>
        ) : null
      }
        
        {alertQeustions && 
          <p className='text-red-600'> {alertQeustions} </p>
        }
        
        <div className="mt-6 border-t pt-6">
          <button id="add-question" className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" onClick={openModal}>
            <i className="fas fa-plus mr-2"></i> Añadir pregunta
          </button>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button 
            id="prev-step-2" 
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={onBack}
          >
            <i className="fas fa-arrow-left mr-2"></i> Anterior
          </button>
          <button id="next-step-2" className="btn-primary px-4 py-2 rounded-md shadow-sm" onClick={handleSubmit}>
            Siguiente <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      { isModalOpen && 
        <ModalQuestions onClose={closeModal} setQuestions={setQuestions} questions={questions} />
      }

    </>
  )
}

export default Step2