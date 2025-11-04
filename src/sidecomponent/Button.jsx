import React, { Children } from 'react'

const Button = ({
    children,
    onClick,
    variant = 'primary',
    disabled = false,
    type = 'button',
    fullWidth = false
}) => {
    const baseClasses = 'px-6 py-2 rounded-lg font-medium transition duration-200';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
        secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:bg-gray-200',
        success: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400'
    };
    return (
        <button

            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''
                } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}

        >
            {children}
        </button>
    )
}

export default Button