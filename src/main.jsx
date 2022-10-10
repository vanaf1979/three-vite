/*
 * Import remote dependencies
 */
import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'

/*
 * Import local dependencies
 */
import '../public/index.css'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
