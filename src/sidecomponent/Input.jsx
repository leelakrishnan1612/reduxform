import React from 'react'

const Input = ({
    label,
    type='text',
    value,
    onChange,
    placeholder,
    disabled = false,
    error = null
}) => {
  return (
    <div>
        {label && (
            <label  className='block text-sm font-medium text-gray-700 mb-2'>
                {label}
            </label>
        )}
        <input

        type ={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className= {`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
            error 
                ? 'border-red-500 focus:ring-red-500':'border-gray-300'
        } ${
            disabled
            ? 'bg-gray-100 cursor-not-allowed':'bg-white'
        }`}
        />
        {error && (
            <p className='mt-1 text-sm text-red-600'>{error}</p>
        )}
    </div>
  )
}

export default Input