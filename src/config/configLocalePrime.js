import { addLocale, locale } from 'primereact/api';
import idioma from '../locales/idioma.json';

export function configLocalePrime() {
  addLocale('es', idioma.es);
  locale('es');
}