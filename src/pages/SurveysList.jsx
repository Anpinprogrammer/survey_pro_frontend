import React, { useState, useEffect } from 'react';
import CreateSurvey from '../components/CreateSurvey'



const SurveysList = () => {
  const [surveys, setSurveys] = useState([]);
  const [filteredSurveys, setFilteredSurveys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todas');
  const [filterType, setFilterType] = useState('todos');
  const [sortBy, setSortBy] = useState('recientes');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [surveyToDelete, setSurveyToDelete] = useState(null);
  const [isOpenCreate, setIsOpenCreate] = useState(false)

  // Cargar encuestas del localStorage
  useEffect(() => {
    loadSurveys();
  }, []);

  // Aplicar filtros cuando cambian
  useEffect(() => {
    applyFilters();
  }, [surveys, searchTerm, filterStatus, filterType, sortBy]);

  const handleCreateSurvey = () => {
    setIsOpenCreate(true)
  }

  const loadSurveys = () => {
    try {
      const storedSurveys = JSON.parse(localStorage.getItem('surveys') || '[]');
      setSurveys(storedSurveys);
    } catch (error) {
      console.error('Error al cargar encuestas:', error);
      setSurveys([]);
    }
  };

  const applyFilters = () => {
    let filtered = [...surveys];

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(survey => 
        survey.basicInfo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        survey.basicInfo.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por estado
    if (filterStatus !== 'todas') {
      filtered = filtered.filter(survey => survey.status === filterStatus);
    }

    // Filtrar por tipo
    if (filterType !== 'todos') {
      filtered = filtered.filter(survey => survey.basicInfo.tipo === filterType);
    }

    // Ordenar
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recientes':
          return (b.createdAt || 0) - (a.createdAt || 0);
        case 'antiguos':
          return (a.createdAt || 0) - (b.createdAt || 0);
        case 'respuestas':
          return (b.responses || 0) - (a.responses || 0);
        case 'alfabetico':
          return a.basicInfo.title.localeCompare(b.basicInfo.title);
        default:
          return 0;
      }
    });

    setFilteredSurveys(filtered);
  };

  const handleDeleteSurvey = (surveyId) => {
    const survey = surveys.find(s => s.basicInfo.surveyId === surveyId);
    setSurveyToDelete(survey);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (surveyToDelete) {
      const updatedSurveys = surveys.filter(
        s => s.basicInfo.surveyId !== surveyToDelete.basicInfo.surveyId
      );
      localStorage.setItem('surveys', JSON.stringify(updatedSurveys));
      setSurveys(updatedSurveys);
      setShowDeleteModal(false);
      setSurveyToDelete(null);
    }
  };

  const handleDuplicateSurvey = (survey) => {
    const duplicatedSurvey = {
      ...survey,
      basicInfo: {
        ...survey.basicInfo,
        surveyId: 'survey-' + Date.now(),
        title: `${survey.basicInfo.title} (Copia)`,
        fecha: Date.now()
      },
      createdAt: Date.now(),
      responses: 0,
      status: 'borrador'
    };

    const updatedSurveys = [...surveys, duplicatedSurvey];
    localStorage.setItem('surveys', JSON.stringify(updatedSurveys));
    setSurveys(updatedSurveys);
  };

  const handleToggleStatus = (surveyId) => {
    const updatedSurveys = surveys.map(survey => {
      if (survey.basicInfo.surveyId === surveyId) {
        return {
          ...survey,
          status: survey.status === 'activa' ? 'pausada' : 'activa'
        };
      }
      return survey;
    });
    localStorage.setItem('surveys', JSON.stringify(updatedSurveys));
    setSurveys(updatedSurveys);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Sin fecha';
    const date = new Date(timestamp);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'activa':
        return 'bg-green-100 text-green-800';
      case 'pausada':
        return 'bg-yellow-100 text-yellow-800';
      case 'borrador':
        return 'bg-gray-100 text-gray-800';
      case 'finalizada':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    const icons = {
      'satisfaccion-cliente': 'fa-smile',
      'satisfaccion-empleado': 'fa-users',
      'capacitacion': 'fa-graduation-cap',
      'evaluacion': 'fa-clipboard-check',
      'otra': 'fa-list-check'
    };
    return icons[type] || 'fa-list-check';
  };

  return (
    <>
    <div className={`${isOpenCreate ? 'hidden' : 'block' } min-h-screen bg-gray-50 p-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mis Encuestas</h1>
          <p className="text-gray-600">Gestiona y visualiza todas tus encuestas</p>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Búsqueda */}
            <div className="md:col-span-2">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Buscar encuestas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filtro por estado */}
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="todas">Todos los estados</option>
                <option value="activa">Activas</option>
                <option value="pausada">Pausadas</option>
                <option value="borrador">Borradores</option>
                <option value="finalizada">Finalizadas</option>
              </select>
            </div>

            {/* Ordenar */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="recientes">Más recientes</option>
                <option value="antiguos">Más antiguos</option>
                <option value="respuestas">Más respuestas</option>
                <option value="alfabetico">Alfabético</option>
              </select>
            </div>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Encuestas</p>
                <p className="text-2xl font-bold text-gray-900">{surveys.length}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <i className="fas fa-poll text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Activas</p>
                <p className="text-2xl font-bold text-green-600">
                  {surveys.filter(s => s.status === 'activa').length}
                </p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <i className="fas fa-check-circle text-green-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Borradores</p>
                <p className="text-2xl font-bold text-gray-600">
                  {surveys.filter(s => s.status === 'borrador').length}
                </p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">
                <i className="fas fa-file-alt text-gray-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Respuestas</p>
                <p className="text-2xl font-bold text-purple-600">
                  {surveys.reduce((acc, s) => acc + (s.responses || 0), 0)}
                </p>
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <i className="fas fa-chart-bar text-purple-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de encuestas */}
        <div className="space-y-4">
          {filteredSurveys.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <i className="fas fa-inbox text-gray-300 text-5xl mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron encuestas
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || filterStatus !== 'todas' 
                  ? 'Intenta ajustar los filtros de búsqueda'
                  : 'Comienza creando tu primera encuesta'}
              </p>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleCreateSurvey}
              >
                <i className="fas fa-plus mr-2"></i>
                Nueva Encuesta
              </button>
            </div>
          ) : (
            filteredSurveys.map((survey) => (
              <div
                key={survey.basicInfo.surveyId}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <i className={`fas ${getTypeIcon(survey.basicInfo.tipo)} text-blue-600 text-lg`}></i>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {survey.basicInfo.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(survey.status)}`}>
                        {survey.status || 'activa'}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {survey.basicInfo.description || 'Sin descripción'}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-calendar"></i>
                        <span>Creada: {formatDate(survey.createdAt || survey.basicInfo.fecha)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-question-circle"></i>
                        <span>{survey.questions?.length || 0} preguntas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-users"></i>
                        <span>{survey.responses || 0} respuestas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-share-nodes"></i>
                        <span>{survey.respondents?.distributionMethod || 'link'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => window.open(`/auth/surveys/${survey.basicInfo.surveyId}`, '_blank')}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      title="Ver encuesta"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    
                    <button
                      onClick={() => handleToggleStatus(survey.basicInfo.surveyId)}
                      className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                      title={survey.status === 'activa' ? 'Pausar' : 'Activar'}
                    >
                      <i className={`fas ${survey.status === 'activa' ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>
                    
                    <button
                      onClick={() => window.location.href = `/edit-survey/${survey.basicInfo.surveyId}`}
                      className="p-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                      title="Editar"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    
                    <button
                      onClick={() => handleDuplicateSurvey(survey)}
                      className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      title="Duplicar"
                    >
                      <i className="fas fa-copy"></i>
                    </button>
                    
                    <button
                      onClick={() => window.location.href = `/reports/${survey.basicInfo.surveyId}`}
                      className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                      title="Ver reportes"
                    >
                      <i className="fas fa-chart-line"></i>
                    </button>
                    
                    <button
                      onClick={() => handleDeleteSurvey(survey.basicInfo.surveyId)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      title="Eliminar"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal de confirmación de eliminación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 rounded-full p-3">
                <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Confirmar eliminación</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas eliminar la encuesta 
              <strong className="text-gray-900"> "{surveyToDelete?.basicInfo.title}"</strong>? 
              Esta acción no se puede deshacer y se perderán todas las respuestas asociadas.
            </p>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSurveyToDelete(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    {/**Crear las surveys */}
    <div className={` ${isOpenCreate ? 'block' : 'hidden'} `}>
      <CreateSurvey />
    </div>

    </>
  );
};

export default SurveysList;