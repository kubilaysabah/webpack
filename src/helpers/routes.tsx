import { createBrowserRouter } from 'react-router-dom'
import Home from 'pages/home'

const routes = [
	{
		path: '/',
		element: <Home />,
	},
]

export default createBrowserRouter(routes)
