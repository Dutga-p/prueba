import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuLanguages } from "react-icons/lu";

const idiomas = {
  es: {
    name: 'Español',
    flag: 'https://www.worldflags.net/assets/img/flags/spain-flag.webp',
  },
  en: {
    name: 'Inglés',
    flag: 'https://www.worldflags.net/assets/img/flags/usa-flag.webp',
  },
  pt: {
    name: 'Portugués',
    flag: 'https://www.worldflags.net/assets/img/flags/portugal-flag.webp',
  },
};

/*componente para cambiar el idioma de la aplicacion 
  recibe como parametro el color del texto
  por defecto el color es dark

  Ejemplo de uso:
  <SelectIdioma color='white' />
*/
const SelectIdioma = ({color = 'white'}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // cambiar el idioma
  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    closeDropdown();
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className='flex items-center gap-2'>
        <LuLanguages className={`text-2xl text-${color}`} />
        <button
          type="button"
          onClick={isOpen ? closeDropdown : openDropdown}
          className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <img
            src={idiomas[selectedLanguage].flag} // Utiliza la URL de la bandera según el idioma seleccionado
            alt="Bandera"
            className="w-4 h-4 mr-2"
          />
          {idiomas[selectedLanguage].name}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <>
          <div onClick={closeDropdown} className="fixed inset-0 h-full w-full z-40"></div>
          <div className="origin-top-right absolute z-50 right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {Object.keys(idiomas).map((languageCode) => (
                <button
                  key={languageCode}
                  onClick={() => handleChangeLanguage(languageCode)}
                  className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <img src={idiomas[languageCode].flag} alt={idiomas[languageCode].name} className="w-4 h-4 mr-2" />
                  {idiomas[languageCode].name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectIdioma;
