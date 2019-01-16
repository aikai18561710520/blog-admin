import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "./index.css"
import RouterMap from "./router"
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>,
    document.getElementById("root") as HTMLElement
)
