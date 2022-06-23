import {
	MenuUnfoldOutlined,
	ShareAltOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Avatar, Breadcrumb, Button, Drawer, Layout } from 'antd'
import { FC, useState } from 'react'
import { UserAuth } from '../Context/Context'
import './Layout.less'

const { Header, Content, Footer } = Layout

interface LayoutAppProps {
	children: JSX.Element
}

const LayoutApp: FC<LayoutAppProps> = ({ children }) => {
	const { user, logOut } = UserAuth()

	const handleSignOut = async () => {
		try {
			await logOut()
		} catch (err) {
			console.log(err)
		}
	}

	const [visible, setVisible] = useState(false)

	const showDrawer = () => {
		setVisible(true)
	}

	const onClose = () => {
		setVisible(false)
	}

	return (
		<Layout
			style={{ minHeight: '100vh' }}
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
				<Breadcrumb style={{ margin: '16px' }}>
					{/* <Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item> */}
				</Breadcrumb>
				<div
					className='site-layout-background'
					style={{ padding: 24, minHeight: 380 }}
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
