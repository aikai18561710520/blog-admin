import * as React from "react"
import { Layout, Row, Col, Avatar, Menu, Dropdown } from "antd"
const { Header } = Layout
import { HeaderBox, UserName, TriggerIcon } from "./style"
const HeaderWrapper = () => {
    const DropMenu: any = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
        </Menu>
    )
    return (
        <HeaderBox>
            <Header style={{ padding: 0 }}>
                <Row type="flex" justify="space-between" align="middle">
                    <Col xs={8} md={6} lg={4} xl={2}>
                        <TriggerIcon type="menu-fold" />
                    </Col>
                    <Col xs={16} md={12} lg={8} xl={4}>
                        <Row type="flex" justify="end" align="middle">
                            <Col>
                                <Dropdown
                                    overlay={DropMenu}
                                    trigger={["click"]}>
                                    <UserName>
                                        <Avatar
                                            style={{
                                                color: "#f56a00",
                                                backgroundColor: "#fde3cf"
                                            }}>
                                            U
                                        </Avatar>
                                        <span className="user_name">
                                            username
                                        </span>
                                    </UserName>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </HeaderBox>
    )
}
export default HeaderWrapper
