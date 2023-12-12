import React from 'react';

const SelectForm = ({ name, registerProps, defaultValue, options, errors }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <select
        {...registerProps}
        id={name}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 w-full p-2.5"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name]?.type === 'required' && (
        <span className='text-red-500'>Este campo es requerido</span>
      )}
    </div>
  );
};

export default SelectForm;
