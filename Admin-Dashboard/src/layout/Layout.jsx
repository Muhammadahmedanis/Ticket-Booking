import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  BellOutlined,
  DeliveredProcedureOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  SettingOutlined,
  ShopOutlined,
  TruckOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='min-h-screen h-fit '>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className='text-white px-4 py-2 text-[16px] text-center font-bold'>Dashboard</div> */}
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AppstoreOutlined style={{fontSize: "20px"}} />,
              label: 'Dahboard',
            },
            {
              key: '2',
              icon: <UserOutlined style={{fontSize: "20px"}} />,
              label: <Link to="/users">Users</Link>,
            },
            {
              key: '3',
              icon: <ProductOutlined style={{fontSize: "20px"}} />,
              label: <Link to="/hotels">Hotels</Link>,
            },
            {
              key: '4',
              icon: <ShopOutlined style={{fontSize: "20px"}} />,
              label: <Link to="/rooms">Rooms</Link>,
            },
            {
              key: '5',
              icon: <TruckOutlined style={{fontSize: "20px"}} />,
              label: 'Delivery',
            },
            {
              key: '6',
              icon: <BarChartOutlined style={{fontSize: "20px"}} />,
              label: 'Stats',
            },
            {
              key: '7',
              icon: <BellOutlined style={{fontSize: "20px"}} />,
              label: 'Notifications',
            },
            {
              key: '8',
              icon: <UploadOutlined style={{fontSize: "20px"}} />,
              label: 'System Health',
            },
            {
              key: '9',
              icon: <UploadOutlined style={{fontSize: "20px"}}/>,
              label: 'Logs',
            },
            {
              key: '10',
              icon: <SettingOutlined style={{fontSize: "20px"}} />,
              label: 'Settings',
            },
            {
              key: '11',
              icon: <UploadOutlined style={{fontSize: "20px"}} />,
              label: 'Profile',
            },
            {
              key: '12',
              icon: <LogoutOutlined style={{fontSize: "20px"}} />,
              label: 'Logout',
            },
          ]}
        />
      </Sider>
      <Layout className='dark:bg-[#222]'>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='flex dark:bg-[#222] text-[rgb(156,156,156)]'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }} />

            <Navbar />
          </div>
        </Header>
        <Content
        className='p-5 mx-4 my-6 rounded-lg bg-white dark:!bg-[#222]'
          style={{
            minHeight: 280,
            // background: colorBgContainer,  
            // borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;