import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from './components/Root';

const store = configureStore()

createRoot(document.getElementById('root')).render(
  <Root store={store} />
)
