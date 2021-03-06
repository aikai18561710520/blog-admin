import * as React from "react"
import { Layout, Menu, Icon } from "antd"
import { Logo } from "./style"
const { Sider } = Layout
const SideBar = () => {
    return (
        <Sider breakpoint="lg" width="260">
            <Logo>
                <img
                    alt="logo"
                    src="http://antd-admin.zuiidea.com/public/logo.svg"
                />
                <span>Blog ADMIN</span>
            </Logo>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar
