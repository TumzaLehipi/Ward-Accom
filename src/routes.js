import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './pages/Home/Home.js';
import AboutUs from './pages/About/AboutUs';
import Team from './pages/Team/Team.js';
import Contact from './pages/Contact/Contact.js';
import Accommodation from './pages/Accomodation/Accommodaton.js'




const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/skills" component={Accommodation} />
            <Route path="/contact" component={Team} />
            <Route path="/works" component={Contact} /> */}
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
        );
}

export default Routes;
