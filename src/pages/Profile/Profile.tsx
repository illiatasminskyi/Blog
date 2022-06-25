import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../components/Context/Context'
import LayoutApp from '../../components/Layout'
import { LoginVerification } from '../../components/LoginVerification/LoginVerification'

const { Header, Footer, Sider, Content } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
	key,
	label: `nav ${key}`,
}))

const items2: MenuProps['items'] = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1)

	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1
			return {
				key: subKey,
				label: `option${subKey}`,
			}
		}),
	}
})

export const Profile = () => {
	return (
		<LayoutApp>
			<Layout className='site-layout-background' style={{ padding: '24px 0' }}>
				<Sider className='site-layout-background' width={200}>
					<Menu
						mode='inline'
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%' }}
						items={items2}
					/>
				</Sider>
				<Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
			</Layout>
		</LayoutApp>
	)
}
