import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import store from "store"
import "assets/css/reset.css"
import "./index.sass"
import MainPage from "pages/MainPage"
import PartnersPage from "pages/PartnersPage"
import ScrollToTop from "component/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/partnership" component={PartnersPage} />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
