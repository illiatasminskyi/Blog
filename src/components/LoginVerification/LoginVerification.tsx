import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../core/store/projectSlice'
import { RootState } from '../../core/store/store'
import { UserAuth } from '../Context/Context'

interface LoginVerificationProps {
	children: any
}

export const LoginVerification: FC<LoginVerificationProps> = ({ children }) => {
	const { user } = UserAuth()
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const userState = useSelector(
		(state: RootState) => state.ProjectSlice.UserLogin
	)

	// useEffect(() => {
	// 	if (userState === false) navigate('/')
	// }, [])

	return <div>{children}</div>
}
