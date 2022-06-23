import { Auth } from '../../pages/Auth/Auth'
import { Home } from '../../pages/Home/Home'
import { Profile } from '../../pages/Profile/Profile'
import { MyFriends } from '../../pages/MyFriends/MyFriends'

export const pRouter = [
	{ path: '/', element: <Auth /> },
	{ path: '/home', element: <Home /> },
	{ path: '/profile', element: <Profile /> },
	{ path: '/my-friends', element: <MyFriends /> },
]
