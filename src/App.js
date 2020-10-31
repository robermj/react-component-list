import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from "./components/Navbar/Navbar"

import "./App.sass"

const SwitchComponents = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SwitchComponents />
      </Router>
    </div>
  )
}

export default App
