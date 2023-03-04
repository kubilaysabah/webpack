import App from './app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
)
