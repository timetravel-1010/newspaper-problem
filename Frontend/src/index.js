import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createRoot } from 'react-dom/client'
import App from './App.js'
const root = createRoot(document.querySelector('#root'))

root.render(
    <div className="container mt-4">
        <App/>
    </div>
)