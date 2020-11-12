import React from "react"
import { Switch, Route } from "react-router-dom"
import MainPage from "./pages/mainPage/MainPage"

function App() {
    return(
        <Switch>
            <Route path="/" exact={ true } component={ MainPage } />
        </Switch>
    );
};

export default App;
