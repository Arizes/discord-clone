import React from "react";
import { Switch, Route } from "react-router-dom";
import loginPage from "./pages/auth/loginPage.js";
import app from "./pages/app.js";
import register from "./pages/auth/register";

function App() {
    return (
        <Switch>
            <Route path="/" exact component={loginPage} />
            <Route path="/app" exact component={app} />
            <Route path="/register" exact component={register}/>
            <Route />
        </Switch>
    );
};

export default App;