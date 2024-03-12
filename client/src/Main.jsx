import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { Store } from './redux/Store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>
    },
    {
        path: "/currency",
        element: <App/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <RouterProvider router={router}/>
    </Provider>
)