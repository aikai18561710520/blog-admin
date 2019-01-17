import styled from "styled-components"

import { Layout } from "antd"
const { Content } = Layout
export const LayoutWrapper = styled(Layout)`
    height: 100%;
`

export const ContentWrapper = styled(Content)`
    margin: 24px 16px;
    padding: 12px;
    background: #fff;
    height: calc(100% - 90px);
    overflow-y: auto;
`
