import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import App from "../components/App/App"

const AppMap: any = connect()(App)

export default withRouter(AppMap)
