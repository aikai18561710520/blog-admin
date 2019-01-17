import * as React from "react"
import { Layout } from "antd"
import { LayoutWrapper, ContentWrapper } from "./style"
import HeaderWrapper from "../Layout/Header/Header"
import SideBar from "../Layout/SideBar"
class App extends React.Component {
    public render() {
        return (
            <LayoutWrapper>
                <SideBar />
                <Layout>
                    <HeaderWrapper />
                    <ContentWrapper>123123</ContentWrapper>
                </Layout>
            </LayoutWrapper>
        )
    }
}

export default App
