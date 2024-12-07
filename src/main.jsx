import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { MoviesProvider } from './Providers/MoviesContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesProvider>
    <AuthProvider>
       {/* ToastContainer is placed at the root level for global availability */}
    <ToastContainer/>
     <RouterProvider router={router} />
     </AuthProvider>
     </MoviesProvider>
  </StrictMode>,
)
