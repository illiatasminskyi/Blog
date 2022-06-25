import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { UserAuth } from '../components/Context/Context'
import { RequireAuth } from '../components/hoc/RequireAuth'
import { LoginVerification } from '../components/LoginVerification/LoginVerification'
import { pRouter } from '../core/routes/pagesRoute'
import { Auth } from '../pages/Auth/Auth'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Auth />} />
					{pRouter.map(route => (
						<Route
							path={route.path}
							element={<RequireAuth>{route.element}</RequireAuth>}
							key={v4()}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
