import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <App/>
    </Provider>
)