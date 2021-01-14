import React             from "react"
import { Switch, Route } from "react-router-dom"
import loginPage         from "./pages/loginPage.jsx"
import main              from "./pages/home.jsx"
function App() {
    return(
        <Switch>
            <Route path="/" exact={ true } component={ loginPage } />
            <Route path="/home" exact component={main} />
        </Switch>
    );
};

export default App;
