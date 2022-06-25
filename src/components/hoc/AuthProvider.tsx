import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = (prop: any) => {
	const [User, setUser] = useState(null)

	const signIn = (newUser: any, cb: any) => {
		setUser(newUser)
		cb()
	}
	const signOut = (cb: any) => {
		cb()
	}

	const value: any = { User, signIn, signOut }

	return (
		<AuthContext.Provider value={value}>{prop.children}</AuthContext.Provider>
	)
}
