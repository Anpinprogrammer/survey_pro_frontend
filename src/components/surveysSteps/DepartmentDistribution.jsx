import { useEffect, useState } from 'react'

const DepartmentDistribution = ({ selected, setInfo, initialData, setIsNotValidDepartment }) => {

  const [departments, setDepartments] = useState(initialData || {
    marketing: false,
    sales: false,
    it: false,
    hr: false,
    finance: false

  })
  const [alert, setAlert] = useState('Debe seleccionar al menos un departamento')

  useEffect(() => {
    const updateDepartments = () => {
      if(selected) {
        setInfo(departments)
        const passedValidation = Object.values(departments).some(value => value === true)
        if(!passedValidation){
          setAlert('Debe seleccionar al menos un departamento')
          setIsNotValidDepartment(true)
        } else {
          setAlert("")
          setIsNotValidDepartment(false)
          
        }
      }
    } 
    updateDepartments()
  }, [departments])


  const handleDepartment = async (e) => {
    const { name, checked } = e.target

    setDepartments( prev => ({
      ...prev,
      [name] : checked
    }))
  }


  return (
    <>
        <div id="department-distribution" className={`${selected ? 'block' : 'hidden'} distribution-option mb-6`}>
          <div className="space-y-3">
            <div className="flex items-center">
              <input id="dept-marketing" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name='marketing' checked={departments.marketing} onChange={handleDepartment} />
              <label htmlFor="dept-marketing" className="ml-3 block text-sm text-gray-700">Marketing (12 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-sales" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name='sales' checked={departments.sales} onChange={handleDepartment} />
              <label htmlFor="dept-sales" className="ml-3 block text-sm text-gray-700">Ventas (24 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-it" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name='it' checked={departments.it} onChange={handleDepartment} />
              <label htmlFor="dept-it" className="ml-3 block text-sm text-gray-700">TI (18 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-hr" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name='hr' checked={departments.hr} onChange={handleDepartment} />
              <label htmlFor="dept-hr" className="ml-3 block text-sm text-gray-700">Recursos Humanos (8 usuarios)</label>
            </div>
            <div className="flex items-center">
              <input id="dept-finance" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name='finance' checked={departments.finance} onChange={handleDepartment} />
              <label htmlFor="dept-finance" className="ml-3 block text-sm text-gray-700">Finanzas (14 usuarios)</label>
            </div>
            {alert && 
              <p className='text-red-600 bg-red-200 p-2 text-center'>{alert}</p>
            }
          </div>
        </div>
    </>
  )
}

export default DepartmentDistribution