import React from 'react'

const Textarea = ({
    label,
    error= null,
    disabled =false,
    onChange,
    placeholder,
   rows =3 ,
    value
}
) => {
  return (
    <div>
        {label && (
            <label className='block text-sm font-medium text-gray-700 mb-2'>{label}</label>
        )}
        <textarea 
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300'
        } ${
          disabled 
            ? 'bg-gray-100 cursor-not-allowed' 
            : 'bg-white'
        }`}
        

        />
        {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
        
    </div>
  )
}

export default Textarea