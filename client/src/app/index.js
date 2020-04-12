import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { DevicesList, DevicesInsert, DevicesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/devices/list" exact component={DevicesList} />
                <Route path="/devices/create" exact component={DevicesInsert} />
                <Route
                    path="/devices/update/:id"
                    exact
                    component={DevicesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App