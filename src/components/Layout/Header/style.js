import styled from "styled-components"
import { Icon } from "antd"
export const HeaderBox = styled.div`
    width: 100%;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

export const UserName = styled.div`
    cursor: pointer;
    padding-right: 24px;
    &:hover {
        span.user_name {
            color: #ccc;
        }
    }
    span.user_name {
        font-size: #eee;
        font-size: 16px;
        margin-left: 4px;
        transition: all 0.2s;
    }
`

export const TriggerIcon = styled(Icon)`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #1890ff;
    }
`
