import React from 'react'

const Success_Message = ({ surveyData, onBackToDashboard, onViewSurvey }) => {

  const saveSurveyToLocalStorage = (survey) => {
    try {
      // Obtener encuestas existentes
      const existingSurveys = JSON.parse(localStorage.getItem('surveys') || '[]');
      
      // Verificar si la encuesta ya existe
      const surveyIndex = existingSurveys.findIndex(
        s => s.basicInfo.surveyId === survey.basicInfo.surveyId
      );

      if (surveyIndex !== -1) {
        // Actualizar encuesta existente
        existingSurveys[surveyIndex] = {
          ...survey,
          basicInfo: {
            ...survey.basicInfo,
            lastModified: Date.now()
          }
        };
      } else {
        // Agregar nueva encuesta con estado inicial
        existingSurveys.push({
          ...survey,
          status: 'activa',
          createdAt: Date.now(),
          responses: 0
        });
      }

      // Guardar en localStorage
      localStorage.setItem('surveys', JSON.stringify(existingSurveys));
      return true;
    } catch (error) {
      console.error('Error al guardar la encuesta:', error);
      return false;
    }
  };

  const handleBackToDashboard = () => {
    const saved = saveSurveyToLocalStorage(surveyData);
    if (saved && onBackToDashboard) {
      onBackToDashboard();
    } else if (saved) {
      // Si no hay callback, redirigir manualmente
      window.location.href = '/dashboard';
    }
  };

  const handleViewSurvey = () => {
    const saved = saveSurveyToLocalStorage(surveyData);
    if (saved && onViewSurvey) {
      onViewSurvey(surveyData.basicInfo.surveyId);
    } else if (saved) {
      // Si no hay callback, redirigir manualmente
      window.location.href = `/survey/${surveyData.basicInfo.surveyId}`;
    }
  };

  return (
    <>
        <div className=" bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center" id="publish-success">
        <div className="mb-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <i className="fas fa-check-circle text-2xl text-green-600"></i>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">¡Encuesta publicada con éxito!</h3>
        <p className="text-gray-500 mb-6">Tu encuesta ha sido publicada y está lista para ser distribuida.</p>
        <div className="flex justify-center space-x-4">
          <button 
            id="view-survey" 
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => onViewSurvey(surveyData.basicInfo.surveyId)}
          >
            Ver encuesta
          </button>
          <button 
            id="back-to-dashboard-after-publish" 
            className="btn-primary px-4 py-2 rounded-md shadow-sm"
            onClick={onBackToDashboard}
          >
            Volver al dashboard
          </button>
        </div>
      </div>
    </>
  )
}

export default Success_Message