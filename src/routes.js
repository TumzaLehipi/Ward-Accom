import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";


const routes = () => {
    return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/works" component={Works} />
        <Route path="*">
            <Redirect to="/" />
        </Route>
    </Switch>
    );

export default routes
