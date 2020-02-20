import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import List from "./List.js"
import Single from "./Single.js"
import data from "./randomUsers.json"

export default function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={List}></Route>
        <Route path="/single/:id" component={Single}></Route>
      </div>
    </Router>
  )
}
