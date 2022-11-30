import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createRoot } from 'react-dom/client'
import Header from './Header.js'
import App from './App.js'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Header />
        <div className="container">
            <App />
        </div>
    </>
)