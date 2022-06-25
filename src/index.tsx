import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App/App'
import 'antd/dist/antd.less'
import { AuthContextProvider } from './components/Context/Context'
import { Provider } from 'react-redux'
import { store } from './core/store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</Provider>
	</React.StrictMode>
)
