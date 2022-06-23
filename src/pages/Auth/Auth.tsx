import { notification, Steps, Tabs } from 'antd'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../components/Context/Context'
import LayoutApp from '../../components/Layout'
import { Authorization } from './Authorization'
import { Registration } from './Registration'

const { TabPane } = Tabs
const { Step } = Steps

export const Auth = () => {
	const auth = getAuth()
	let navigate = useNavigate()
	const database = getDatabase()
	const { user } = UserAuth()

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [sex, setSex] = useState('')
	const [current, setCurrent] = useState(0)

	// Registration
	const writeUserData = (name: string, sex_user: string) => {
		try {
			const db = getDatabase()
			const postTask = ref(db, `${user.uid}/userData`)
			const newTask = push(postTask)
			set(newTask, {
				username: name,
				sex: sex_user,
			})
			openNotificationWithIcon('success', 'Success', 'Second point')
			navigate('/profile', { replace: true })
		} catch (err) {
			console.log(err)
		}
	}

	const UserRegistration = (e: any) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setCurrent(1)
				openNotificationWithIcon('success', 'Success', 'First point')
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message

				if (errorCode === 'auth/weak-password')
					openNotificationWithIcon(
						'error',
						'Error',
						'Password must be at least 6 characters'
					)
				else if (errorCode === 'auth/email-already-in-use')
					openNotificationWithIcon('error', 'Error', 'Email already in use')
				else if (errorCode === 'auth/invalid-email')
					openNotificationWithIcon('error', 'Error', 'Invalid Email')
				else openNotificationWithIcon('error', 'Error', errorMessage)
			})
	}

	// Authorization
	const UserAuthorization = (e: any) => {
		e.preventDefault()
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				openNotificationWithIcon('success', 'Success', '')
				navigate('/profile', { replace: true })
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message

				if (errorCode === 'auth/wrong-password')
					openNotificationWithIcon('error', 'Error', 'Wrong password')
				else if (errorCode === 'auth/user-not-found')
					openNotificationWithIcon('error', 'Error', 'User not found')
				else openNotificationWithIcon('error', 'Error', errorMessage)
			})
	}

	// Info
	type NotificationType = 'success' | 'info' | 'warning' | 'error'
	const openNotificationWithIcon = (
		type: NotificationType,
		title: string,
		text: string
	) => {
		notification[type]({
			message: title,
			description: text,
		})
	}

	return (
		<LayoutApp>
			<div
				style={{
					minWidth: '200px',
					maxWidth: '600px',
					height: 'calc(100vh - 200px)',
					minHeight: '375px',
					margin: '0px auto',
					paddingBottom: '20px',
				}}
			>
				<Tabs type='card'>
					{/* Registration */}
					<TabPane tab='Registration' key='1'>
						<Registration
							current={current}
							setCurrent={setCurrent}
							username={username}
							setUsername={setUsername}
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							sex={sex}
							setSex={setSex}
							UserRegistration={UserRegistration}
							writeUserData={writeUserData}
						/>
					</TabPane>

					{/* Authorization */}
					<TabPane tab='Authorization' key='2'>
						<Authorization
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							userAuthorization={UserAuthorization}
						/>
					</TabPane>
				</Tabs>
			</div>
		</LayoutApp>
	)
}
