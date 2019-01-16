import * as React from "react"
import { Layout } from "antd"
const { Header } = Layout
import { HeaderBox } from "./style"
const HeaderWrapper = () => {
    return (
        <HeaderBox>
            <Header>Irving的个人博客管理后台</Header>
        </HeaderBox>
    )
}
export default HeaderWrapper
