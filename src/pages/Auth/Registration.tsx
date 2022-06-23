import { UnlockOutlined, UserOutlined } from '@ant-design/icons'
import { current } from '@reduxjs/toolkit'
import { Button, Form, Input, Radio, Steps, Tabs, Typography } from 'antd'
import { FC } from 'react'

const { Title } = Typography
const { TabPane } = Tabs
const { Step } = Steps

const steps = [
	{
		title: 'First',
		content: 'First-content',
	},
	{
		title: 'Second',
		content: 'Second-content',
	},
]

interface RType {
	current: number
	setCurrent: (value: number) => void
	username: string
	setUsername: (value: string) => void
	email: string
	setEmail: (value: string) => void
	password: string
	setPassword: (value: string) => void
	sex: string
	setSex: any
	UserRegistration: any
	writeUserData: any
}

export const Registration: FC<RType> = ({
	current,
	setCurrent,
	username,
	setUsername,
	email,
	setEmail,
	password,
	setPassword,
	sex,
	setSex,
	UserRegistration,
	writeUserData,
}) => {
	return (
		<>
			<Title style={{ marginTop: '30px' }}>Registration</Title>
			<Form name='basic' initialValues={{ remember: true }} autoComplete='off'>
				{current === 0 ? (
					<>
						<Form.Item
							name='email'
							rules={[{ required: true, message: 'Please input your Email!' }]}
						>
							<Input
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Email'
								prefix={'@'}
							/>
						</Form.Item>

						<Form.Item
							name='password'
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
						>
							<Input.Password
								value={password}
								onChange={e => setPassword(e.target.value)}
								placeholder='Password'
								prefix={<UnlockOutlined />}
							/>
						</Form.Item>
						<Form.Item wrapperCol={{ span: 6 }}>
							<Button
								type='primary'
								htmlType='submit'
								onClick={UserRegistration}
							>
								Next
							</Button>
						</Form.Item>
					</>
				) : (
					<>
						<Form.Item
							name='username'
							rules={[
								{ required: true, message: 'Please input your username!' },
							]}
						>
							<Input
								value={username}
								onChange={e => setUsername(e.target.value)}
								placeholder='Username'
								prefix={<UserOutlined />}
							/>
						</Form.Item>

						<Form.Item>
							<Radio.Group>
								<Radio value='Man' onChange={e => setSex(e.target.value)}>
									Man
								</Radio>
								<Radio value='Woman' onChange={e => setSex(e.target.value)}>
									Woman
								</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item wrapperCol={{ span: 6 }}>
							<Button
								type='primary'
								htmlType='submit'
								onClick={() => writeUserData(username, sex)}
							>
								Log In
							</Button>
						</Form.Item>
					</>
				)}
			</Form>

			<Steps current={current} style={{ paddingTop: '35px' }}>
				{steps.map(item => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
		</>
	)
}
