import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { v4 } from 'uuid'
import { pRouter } from '../core/routes/pagesRoute'
// import './App.less'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					{pRouter.map(route => (
						<Route path={route.path} element={route.element} key={v4()} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
