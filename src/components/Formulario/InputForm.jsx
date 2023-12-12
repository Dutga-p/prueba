import React from 'react';

// Componente de campo de entrada genérico
const InputForm = ({ name, registerProps, label, placeholder, type, defaultValue, errors }) => {

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        {...registerProps}
        id={name}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 w-full p-2.5"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors[name] && <p className='text-red-500'>{errors[name].message}</p>}
    </div>
  );
};

export default InputForm;
