import { Link } from 'react-router-dom';
import { SelectIdioma } from '../../../components';
import { rutaInicio } from '../../../router/rutas';
import { FormularioLogin } from './components/FormularioLogin';
import ImageSection from './components/ImageSection';
import { useTranslation } from 'react-i18next'

export const Login = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="w-[90%] h-full flex items-center">
        <div className="md:flex w-full h-[80%] rounded-3xl shadow-xl bg-white">
          <ImageSection />
          <div className="w-full md:3/5 lg:w-2/5 pb-10 px-5 md:px-12 xl:px-24 py-14 flex flex-col justify-center space-y-4 ">
            <div>
              <h1 className='text-4xl xl:text-6xl font-bold'>{t('login.welcome')}</h1>
              <p className='text-gray-400 text-md lg:text-xl'>{t('login.subtitle')}</p>
            </div>
            <FormularioLogin />
            <div className='w-1/2'>
              <SelectIdioma color={'black'} />
            </div>
            <Link to={rutaInicio} className='text-gray-400 text-xl hover:text-blue-500'>
              <i className='fa fa-home'></i> {t('login.returnStart')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
