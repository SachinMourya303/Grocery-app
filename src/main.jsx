import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const Clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!Clerk_key) throw new Error("Clerk Key Required");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={Clerk_key}>
    <App />
    </ClerkProvider>
  </StrictMode>,
)
