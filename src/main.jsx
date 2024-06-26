import ReactDOM from 'react-dom/client'
import './assets/css/global.css'
import { DarkModeProvider } from './utils/DarkModeContext.jsx'
import Routes from './utils/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
      <Routes/>
    </DarkModeProvider>,
)
