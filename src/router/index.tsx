import * as React from "react"
// import * as Loadable from "react-loadable"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../containers/App"
const Routes = [
    {
        component: App,
        path: "/"
    }
]

const RouterMap = () => (
    <Router>
        <App>
            <Switch>
                {Routes.map(c => (
                    <Route
                        key={c.path}
                        exact={true}
                        path={c.path}
                        component={c.component}
                    />
                ))}
            </Switch>
        </App>
    </Router>
)

export default RouterMap
