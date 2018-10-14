import "bulma/css/bulma.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Header, Error } from "../../components";
import List from "../../components/List";

import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={List} />
            <Route exact path={`${process.env.PUBLIC_URL}/list`} component={List} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;