import { useState } from 'react'

const MultipleChoice = ({ selected, options, setOptions }) => {

  const handleNewOption = () => {
    setOptions([...options, ""]); // <-- pasar array, no updater
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.map((opt, i) => (i === index ? value : opt));
    setOptions(newOptions); // <-- pasar array
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions); // <-- pasar array
  };

  return (
    <>
        <div className={`question-options ${selected ? 'block' : 'hidden'} `}  id="multiple-choice-options">
          <label className="block text-sm font-medium text-gray-700 mb-2">Opciones</label>
          <div id="multiple-choice-container" className="space-y-2 mb-2">
            { options.length &&
            options.map( (option, index) => (
                <div className="flex items-center" key={index}>
                    <input 
                      type="text" 
                      className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                      value={option}
                      onChange={ e => handleOptionChange(index, e.target.value) }
                      placeholder={`Opción ${index + 1}`} />
                    <button 
                      className="ml-2 p-1 text-gray-400 hover:text-red-500"
                      onClick={() => handleRemoveOption(index)}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            ) )}
          </div>
          <button type="button" id="add-option" className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center" onClick={handleNewOption}>
            <i className="fas fa-plus mr-1"></i> Añadir opción
          </button>
        </div>
    </>
  )
}

export default MultipleChoice