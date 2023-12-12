import { configLocalePrime } from './config/configLocalePrime';
import { AppRouter } from './router/AppRouter'

function App() {

  configLocalePrime(); // configura el idioma de primeReact

  return <AppRouter />;
}

export default App
