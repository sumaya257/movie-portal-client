import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { MoviesProvider } from './Providers/MoviesContext'
import DarkModeProvider from './Providers/DarkModeProvider'
import AppWrapper from './Providers/AppWrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <AppWrapper>
    <MoviesProvider>
    <AuthProvider>
       {/* ToastContainer is placed at the root level for global availability */}
    <ToastContainer/>
     <RouterProvider router={router} />
     </AuthProvider>
     </MoviesProvider>
     </AppWrapper>
     </DarkModeProvider>
  </StrictMode>,
)
