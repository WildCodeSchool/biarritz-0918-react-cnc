import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home.page.jsx';
import Error from './pages/Error.page.jsx';
import ProfileClient from './pages/ProfileClients/ProfileClient.page.jsx';
import SalonView from './pages/ProfileSalons/SalonView.jsx';
import SalonViewBis from './pages/ProfileSalons/SalonViewBis.jsx';
import SearchList from './pages/SearchList/SearchList.page.jsx';
import AdminPanel from './pages/AdminPanel/AdminPanel.js';
import Fetch from './components/fetch/Fetch';
import { getUserId } from './Auth.api';
import Register from './pages/RegisterForms/Register.page.jsx';

function PrivateRoute(props) {
   return (
      <Fetch
         req={getUserId}
         role={props.role}
         renderSuccess={() => <Route {...props} />}
         renderError={() => <Redirect to="/" />}
      />
   );
}

export default function({ login }) {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Home} />
            <Route path="/logout" exact component={Home} />
            <PrivateRoute path="/profile" component={ProfileClient} role="ROLE_USER" />
            <Route
               path="/salons/search/:id-:city"
               component={({ match }) => <SearchList id={match.params.id} city={match.params.city} />}
            />
            <Route path="/salons/search" component={SearchList} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/admin" component={AdminPanel} role="ROLE_ADMIN" />
            <Route
               path="/salons/:name/:id/view"
               // component={({ match }) => <SalonView id={match.params.id_} />}
               component={({ match }) => <SalonViewBis id={match.params.id} />}
               role="ROLE_SALON"
            />

            <Route component={Error} />
         </Switch>
      </Router>
   );
}
