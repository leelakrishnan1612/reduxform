import React from 'react'
import { useSelector } from 'react-redux'
import { currentStep } from './redux/formSlice'

const ProgressIndicator = () => {
    const currentStepen= useSelector(currentStep)
  return (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step, idx) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            currentStepen >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}>
            {step}
          </div>
          {idx < 2 && (
            <div className={`w-24 h-1 ${currentStepen > step ? 'bg-blue-600' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProgressIndicator