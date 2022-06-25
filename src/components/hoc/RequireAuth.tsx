import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from '../Context/Context'

export const RequireAuth = (prop: { children: any }) => {
	const location = useLocation()
	const { user } = UserAuth()

	if (!user) {
		return <Navigate to='/' state={{ from: location }} />
	}
	// if (user) {
	// 	return <Navigate to='/profile' state={{ from: location }} />
	// }

	return prop.children
}
