import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home.page.jsx";
import Error from "./pages/Error.page.jsx";
import ProfileClient from "./pages/ProfileClients/ProfileClient.page.jsx";
import SalonView from "./pages/ProfileSalons/SalonView.jsx";
import SearchList from "./pages/SearchList/SearchList.page.jsx";

export default function({ login }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Home} />
        <Route path="/logout" exact component={Home} />
        <Route path="/profile/" component={ProfileClient} />
        <Route
          path="/salons/search/:city"
          component={({ match }) => <SearchList city={match.params.city} />}
        />
        <Route
          path="/salons/:id_:name/view"
          component={({ match }) => <SalonView id={match.params.id_} />}
        />
        {/* <Route
                    exact path="/sprofile/:id"
                    component={({ match }) => (
                        <ProfileSalon id={match.params.id} />
                    )}
                />
                <Route path="/search/" component={SearchList} />
                <Route path="/reactcpanel/" component={AdminPanel} /> */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
