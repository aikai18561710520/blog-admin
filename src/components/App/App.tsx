import * as React from "react"
import { Layout } from "antd"
import { LayoutWrapper } from "./style"
import HeaderWrapper from "../Layout/Header/Header"
import SideBar from "../Layout/SideBar"
const { Content } = Layout
class App extends React.Component {
    public render() {
        return (
            <LayoutWrapper>
                <SideBar />
                <Layout>
                    <HeaderWrapper />
                    <Content>123123</Content>
                </Layout>
            </LayoutWrapper>
        )
    }
}

export default App
