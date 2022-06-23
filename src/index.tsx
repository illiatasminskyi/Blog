import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App/App'
import 'antd/dist/antd.less'
import { AuthContextProvider } from './components/Context/Context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</React.StrictMode>
)
