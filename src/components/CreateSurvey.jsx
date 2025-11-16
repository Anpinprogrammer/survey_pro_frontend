import { useState } from 'react'
import Step1 from './surveysSteps/Step1'
import Step2 from './surveysSteps/Step2'
import Step3 from './surveysSteps/Step3'
import Step4 from './surveysSteps/Step4'
import Success_Message from './surveysSteps/Success_Message'

const CreateSurvey = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [surveyData, setSurveyData] = useState({
        basicInfo: {},
        questions: [],
        respondents: [],
        preview: {}
    })

    const totalSteps = 4

    const handleStepComplete = (stepData) => {
        // Actualizar los datos de la encuesta según el paso
        setSurveyData(prev => ({
            ...prev,
            ...stepData
        }))
        
        // Avanzar al siguiente paso
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1)
        } else {
            // Si completamos el paso 4, mostrar success
            setCurrentStep(5)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    const getStepTitle = () => {
        const titles = {
            1: 'Información básica',
            2: 'Preguntas',
            3: 'Asignar encuestados',
            4: 'Vista previa y publicar',
            5: 'Completado'
        }
        return titles[currentStep]
    }

    const progressPercentage = (currentStep / totalSteps) * 100

    return (
        <>
            <div className="fade-in" id="create-survey-content">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Crear nueva encuesta</h1>
                        <p className="text-gray-500">Sigue los pasos para crear tu encuesta</p>
                    </div>
                    <button 
                        id="back-to-dashboard" 
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Volver
                    </button>
                </div>
        
                {/* Progress indicator */}
                {currentStep <= totalSteps && (
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <div className="text-sm font-medium text-blue-600">
                                Paso <span>{currentStep}</span> de {totalSteps}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                <span>{getStepTitle()}</span>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div 
                                className="progress-value" 
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                )}
        
                {/* Renderizado condicional de los steps */}
                {currentStep === 1 && (
                    <Step1 
                        onComplete={handleStepComplete}
                        initialData={surveyData.basicInfo}
                    />
                )}

                {currentStep === 2 && (
                    <Step2 
                        onComplete={handleStepComplete}
                        onBack={handleBack}
                        initialData={surveyData.questions}
                    />
                )}

                {currentStep === 3 && (
                    <Step3 
                        onComplete={handleStepComplete}
                        onBack={handleBack}
                        initialData={surveyData.respondents}
                    />
                )}

                {currentStep === 4 && (
                    <Step4 
                        onComplete={handleStepComplete}
                        onBack={handleBack}
                        surveyData={surveyData}
                    />
                )}

                {currentStep === 5 && (
                    <Success_Message surveyData={surveyData} />
                )}
            </div>
        </>
    )
}

export default CreateSurvey