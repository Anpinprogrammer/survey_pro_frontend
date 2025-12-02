import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Survey = () => {
  // Obtener el surveyId de la URL usando useParams
  const { surveyId } = useParams();
  const navigate = useNavigate();
  
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Cargar la encuesta cuando el componente se monta o cambia el surveyId
  useEffect(() => {
    if (surveyId) {
      loadSurvey(surveyId);
    }
  }, [surveyId]);

  const loadSurvey = (id) => {
    try {
      setLoading(true);
      const surveys = JSON.parse(localStorage.getItem('surveys') || '[]');
      const foundSurvey = surveys.find(s => s.basicInfo?.surveyId === id);
      
      if (foundSurvey) {
        setSurvey(foundSurvey);
      } else {
        console.error('Encuesta no encontrada');
      }
    } catch (error) {
      console.error('Error al cargar la encuesta:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    const surveyLink = window.location.href;
    navigator.clipboard.writeText(surveyLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleBackToDashboard = () => {
    navigate('/auth/surveys');
  };

  const handleEditSurvey = () => {
    navigate(`/auth/surveys/${surveyId}/edit`);
  };

  const handleViewReports = () => {
    navigate(`/auth/surveys/${surveyId}/reports`);
  };

  const getQuestionTypeIcon = (type) => {
    const icons = {
      'multiple-choice': 'fa-circle-dot',
      'checkbox': 'fa-square-check',
      'short-text': 'fa-align-left',
      'long-text': 'fa-align-justify',
      'scale': 'fa-sliders',
      'yes-no': 'fa-toggle-on',
      'date': 'fa-calendar',
      'rating': 'fa-star'
    };
    return icons[type] || 'fa-question-circle';
  };

  const getStatusColor = (status) => {
    const colors = {
      activa: 'bg-green-100 text-green-800',
      pausada: 'bg-yellow-100 text-yellow-800',
      borrador: 'bg-gray-100 text-gray-800',
      finalizada: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Sin fecha';
    const date = new Date(timestamp);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
          <p className="text-gray-600">Cargando encuesta...</p>
        </div>
      </div>
    );
  }

  if (!survey) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md text-center">
          <i className="fas fa-exclamation-triangle text-5xl text-yellow-500 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Encuesta no encontrada</h2>
          <p className="text-gray-600 mb-6">
            La encuesta que buscas no existe o ha sido eliminada.
          </p>
          <button
            onClick={handleBackToDashboard}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver a la lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={handleBackToDashboard}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Volver"
                >
                  <i className="fas fa-arrow-left text-gray-600"></i>
                </button>
                <h1 className="text-3xl font-bold text-gray-900">
                  {survey.basicInfo?.title || 'Sin título'}
                </h1>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(survey.status)}`}>
                  {survey.status || 'activa'}
                </span>
              </div>
              <p className="text-gray-600 ml-12">
                {survey.basicInfo?.description || 'Sin descripción'}
              </p>
            </div>
          </div>

          {/* Info adicional */}
          <div className="flex flex-wrap items-center gap-6 ml-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <i className="fas fa-calendar"></i>
              <span>Creada: {formatDate(survey.createdAt || survey.basicInfo?.fecha)}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-question-circle"></i>
              <span>{survey.questions?.length || 0} preguntas</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-users"></i>
              <span>{survey.responses || 0} respuestas</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3 mt-6 ml-12">
            <button
              onClick={() => setShowShareModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-share-nodes"></i>
              Compartir
            </button>
            <button
              onClick={() => setShowQRModal(true)}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-qrcode"></i>
              Ver QR
            </button>
            <button
              onClick={handleEditSurvey}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button
              onClick={handleViewReports}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-chart-bar"></i>
              Ver reportes
            </button>
          </div>
        </div>
      </div>

      {/* Vista previa de preguntas */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <i className="fas fa-eye text-blue-600"></i>
            Vista previa de la encuesta
          </h2>

          <div className="space-y-6">
            {survey.questions && survey.questions.length > 0 ? (
              survey.questions.map((question, index) => (
                <div key={question.id || index} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <i className={`fas ${getQuestionTypeIcon(question.questionType)} text-blue-600`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-500">
                          Pregunta {index + 1}
                        </span>
                        {question.isRequired && (
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                            Obligatoria
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {question.questionText || 'Sin texto'}
                      </h3>
                      {question.questionDescription && (
                        <p className="text-sm text-gray-600 mt-1">
                          {question.questionDescription}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <i className="fas fa-inbox text-4xl mb-3"></i>
                <p>Esta encuesta no tiene preguntas aún</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de compartir */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Compartir encuesta</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Enlace de la encuesta
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={window.location.href}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      copied
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de QR */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 text-center">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Código QR</h3>
              <button
                onClick={() => setShowQRModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg mb-4">
              <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
                <i className="fas fa-qrcode text-6xl text-gray-400"></i>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <i className="fas fa-download mr-2"></i>
              Descargar QR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;