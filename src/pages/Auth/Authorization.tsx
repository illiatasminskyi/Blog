import { UnlockOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { FC } from 'react'

const { Title } = Typography

interface AType {
	email: string
	setEmail: (value: string) => void
	password: string
	setPassword: (value: string) => void
	userAuthorization: any
}

export const Authorization: FC<AType> = ({
	email,
	setEmail,
	password,
	setPassword,
	userAuthorization,
}) => {
	return (
		<>
			<Title style={{ marginTop: '30px' }}>Authorization</Title>
			<Form name='basic' initialValues={{ remember: true }} autoComplete='off'>
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
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						prefix={<UnlockOutlined />}
					/>
				</Form.Item>

				<Form.Item wrapperCol={{ span: 6 }}>
					<Button type='primary' htmlType='submit' onClick={userAuthorization}>
						Log In
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
