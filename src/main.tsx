import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import ProviderConf from './router/provider-config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderConf>
    <RouterProvider  router={router}/>
    </ProviderConf>
  </StrictMode>,
)
