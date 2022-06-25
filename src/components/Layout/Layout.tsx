import {
	MenuUnfoldOutlined,
	ShareAltOutlined,
	UserOutlined,
} from '@ant-design/icons'
import {
	Avatar,
	Breadcrumb,
	Button,
	Descriptions,
	Drawer,
	Layout,
	PageHeader,
} from 'antd'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { userLogin } from '../../core/store/projectSlice'
import { RootState } from '../../core/store/store'
import { UserAuth } from '../Context/Context'
import './Layout.less'

const { Header, Content, Footer } = Layout

interface LayoutAppProps {
	children: JSX.Element
}

const LayoutApp: FC<LayoutAppProps> = ({ children }) => {
	const { user, logOut } = UserAuth()
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const location = useLocation()

	const userState = useSelector(
		(state: RootState) => state.ProjectSlice.UserLogin
	)

	const handleSignOut = async () => {
		try {
			await logOut()
			return <Navigate to='/' state={{ from: location }} />
			// await dispatch(userLogin(false))
			// await navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

	// useEffect(() => {
	// 	if (user != null) dispatch(userLogin(true))
	// 	if (userState === false) navigate('/')
	// }, [])

	const [visible, setVisible] = useState(false)

	const showDrawer = () => {
		setVisible(true)
	}

	const onClose = () => {
		setVisible(false)
	}

	return (
		<Layout
			style={{ minHeight: '100vh', paddingBottom: '16px' }}
			className='site-drawer-render-in-current-wrapper'
		>
			<Header
				style={{
					position: 'fixed',
					zIndex: 1,
					width: '100%',
					backgroundColor: '#FFFFFF',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<div className='menuButton'>
					<MenuUnfoldOutlined onClick={showDrawer} />
				</div>
				<div style={{ fontSize: '18px' }}>
					<ShareAltOutlined />
					Blog
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Avatar
						style={{ backgroundColor: '#87d068', marginRight: '10px' }}
						icon={<UserOutlined />}
					/>
					{user && (
						<div className='userButton'>
							<Button onClick={handleSignOut}>{user.email}</Button>
						</div>
					)}
				</div>
			</Header>
			<Content className='site-layout'>
				{userState === true && (
					<div
						className='site-page-header-ghost-wrapper'
						style={{ marginTop: '16px' }}
					>
						<PageHeader
							ghost={false}
							onBack={() => window.history.back()}
							title='Title'
							subTitle='This is a subtitle'
							extra={[
								<Button key='3'>Operation</Button>,
								<Button key='2'>Operation</Button>,
								<Button key='1' type='primary'>
									Primary
								</Button>,
							]}
						></PageHeader>
					</div>
				)}

				<div
					className='site-layout-background'
					style={{ padding: 24, minHeight: 380, marginTop: '16px' }}
				>
					{children}
				</div>
			</Content>
			{/* <Footer style={{ textAlign: 'center' }}>
				Ant Design ©2018 Created by Ant UED
			</Footer> */}
			<Drawer
				title='Drawer with extra actions'
				placement={'left'}
				width={500}
				onClose={onClose}
				visible={visible}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</Layout>
	)
}

export default LayoutApp
