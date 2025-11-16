import { useState } from 'react'
import Header from '../components/dashboard/Header'
import Charts from '../components/dashboard/Charts'
import RecentSurveys from '../components/dashboard/RecentSurveys'
import CreateSurvey from '../components/CreateSurvey'

import { useUIStore } from '../store/uiStore'

const Dashboard = () => {

  const { isOpen, toggleOpen } = useUIStore()


  return (
    <>
    {/**Top header with breadcrumbs and user info */}
      <Header />

      {/** Main dashboard content */}
      <div className={`fade-in ${isOpen ? 'hidden' : 'block' }`}  id="dashboard-content">
      {/** Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Encuestas activas</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">12</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-clipboard-list text-blue-500 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-green-600 text-sm flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>4% más que el mes pasado</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Respuestas totales</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">347</h3>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-chart-line text-green-500 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-green-600 text-sm flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>12% más que el mes pasado</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Tasa de finalización</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">78%</h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fas fa-check-circle text-purple-500 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-red-600 text-sm flex items-center">
              <i className="fas fa-arrow-down mr-1"></i>
              <span>2% menos que el mes pasado</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Satisfacción promedio</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">4.6/5</h3>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fas fa-star text-yellow-500 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-green-600 text-sm flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>0.2 más que el mes pasado</span>
            </p>
          </div>
        </div>
      </div>

      {/**Charts */}
      <Charts />

      {/** Recent surveys */}
      <RecentSurveys />
      
    </div>

    {/**Crear las surveys */}
    <div className={` ${isOpen ? 'block' : 'hidden'} `}>
      <CreateSurvey />
    </div>

    </>
  )
}

export default Dashboard