import styled from 'styled-components'
import { Icon } from 'antd'
export const HeaderBox = styled.div `
    width:100%;
    color:#fff;
    font-size:20px;
    font-weight:bold;
`

export const UserName = styled.div `
    cursor:point;
    padding-right:24px;
    span.user_name {
        font-size: #eee;
        font-size: 16px;
        margin-left: 4px;
    }
`

export const TriggerIcon = styled(Icon)
`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
    &:hover {
        color: #1890ff;
    }
`