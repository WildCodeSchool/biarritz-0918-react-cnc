import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home.page.jsx';
import Error from './pages/Error.page.jsx';
import ProfileClient from './pages/ProfileClients/ProfileClient.page.jsx';

export default function({login}) {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/profile/" component={ProfileClient} />
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
    )
}
