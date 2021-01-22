import React from "react"
import { Switch, Route } from "react-router-dom"
import loginPage from "./pages/auth/loginPage.js"
import app from "./pages/app.js"

function App() {
    return (
        <Switch>
            <Route path="/" exact component={loginPage} />
            <Route path="/app" exact component={app} />
            <Route />
        </Switch>
    );
};

export default App;