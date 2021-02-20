import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loginPage from "./pages/loginPage.js";
import appLoading from "./pages/appLoading.js";
import register from "./pages/registerPage";
import channelView from "./pages/channelView"
import notFound from "./pages/notFound"

function App() {
    return (
        <Switch>
            <Route path="/" exact component={loginPage} />
            <Route path="/app" exact component={appLoading} />
            <Route path="/channels/:id" exact component={channelView} />
            <Route path="/channels/:id/:channelId" exact component={channelView} />
            <Route path="/register" exact component={register}/>
            <Route path="*" component={notFound} />
        </Switch>
    );
};

export default App;