import React from 'react'

const Step3 = () => {
  return (
    <>
        <div class="hidden bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6" id="step-3">
        <h2 class="text-xl font-semibold mb-4">Asignar Participantes</h2>
        
        <div class="mb-6">
          <label for="distribution-method" class="block text-sm font-medium text-gray-700 mb-1">Método de distribución</label>
          <select id="distribution-method" class="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="link">Enlace público</option>
            <option value="email">Envío por correo electrónico</option>
            <option value="specific">Usuarios específicos</option>
            <option value="department">Por departamento</option>
          </select>
        </div>
        
        <div id="link-distribution" class="distribution-option mb-6">
          <div class="flex items-center bg-gray-50 p-3 rounded-md">
            <input type="text" value="https://encuestas.empresa.com/s/abc123" readonly class="flex-1 bg-transparent border-0 focus:ring-0" />
            <button class="ml-2 px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 focus:outline-none">
              <i class="far fa-copy mr-1"></i> Copiar
            </button>
          </div>
          <p class="mt-2 text-sm text-gray-500">Este enlace puede ser compartido con cualquier persona. No se requiere autenticación.</p>
        </div>
        
        <div id="email-distribution" class="distribution-option hidden mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Direcciones de correo electrónico</label>
            <textarea rows="3" placeholder="Ingresa las direcciones de correo electrónico separadas por comas" class="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            <p class="mt-1 text-sm text-gray-500">Se enviará un correo electrónico con un enlace único a cada destinatario.</p>
          </div>
          
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje personalizado (opcional)</label>
            <textarea rows="3" placeholder="Añade un mensaje personalizado al correo electrónico" class="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>
        </div>
        
        <div id="specific-distribution" class="distribution-option hidden mb-6">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Buscar usuarios</label>
            <div class="relative">
              <input type="text" placeholder="Buscar por nombre o correo electrónico" class="form-input pl-10 pr-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-3 rounded-md mb-4">
            <h4 class="text-sm font-medium text-gray-700 mb-2">Usuarios seleccionados</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between bg-white p-2 rounded">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">LP</div>
                  <div class="ml-3">
                    <p class="text-sm font-medium">Laura Pérez</p>
                    <p class="text-xs text-gray-500">laura.perez@empresa.com</p>
                  </div>
                </div>
                <button class="text-red-500 hover:text-red-700">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="flex items-center justify-between bg-white p-2 rounded">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">CM</div>
                  <div class="ml-3">
                    <p class="text-sm font-medium">Carlos Mendoza</p>
                    <p class="text-xs text-gray-500">carlos.mendoza@empresa.com</p>
                  </div>
                </div>
                <button class="text-red-500 hover:text-red-700">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div id="department-distribution" class="distribution-option hidden mb-6">
          <div class="space-y-3">
            <div class="flex items-center">
              <input id="dept-marketing" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="dept-marketing" class="ml-3 block text-sm text-gray-700">Marketing (12 usuarios)</label>
            </div>
            <div class="flex items-center">
              <input id="dept-sales" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="dept-sales" class="ml-3 block text-sm text-gray-700">Ventas (24 usuarios)</label>
            </div>
            <div class="flex items-center">
              <input id="dept-it" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="dept-it" class="ml-3 block text-sm text-gray-700">TI (18 usuarios)</label>
            </div>
            <div class="flex items-center">
              <input id="dept-hr" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="dept-hr" class="ml-3 block text-sm text-gray-700">Recursos Humanos (8 usuarios)</label>
            </div>
            <div class="flex items-center">
              <input id="dept-finance" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="dept-finance" class="ml-3 block text-sm text-gray-700">Finanzas (14 usuarios)</label>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Opciones de notificación</label>
          <div class="space-y-2">
            <div class="flex items-center">
              <input id="notify-start" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="notify-start" class="ml-3 block text-sm text-gray-700">Notificar al iniciar la encuesta</label>
            </div>
            <div class="flex items-center">
              <input id="notify-reminder" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="notify-reminder" class="ml-3 block text-sm text-gray-700">Enviar recordatorios automáticos</label>
            </div>
            <div class="flex items-center">
              <input id="notify-completion" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="notify-completion" class="ml-3 block text-sm text-gray-700">Notificar al completar la encuesta</label>
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex justify-between">
          <button id="prev-step-3" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <i class="fas fa-arrow-left mr-2"></i> Anterior
          </button>
          <button id="next-step-3" class="btn-primary px-4 py-2 rounded-md shadow-sm">
            Siguiente <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Step3