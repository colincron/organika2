import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Organika Market</h1>
        <p className="lead">
          We are 100% committed to bringing you suspiciously satisfying sustainable sustenance.
        </p>
        <hr className="my-4" />
        <p>
          We believe alliteration makes food taste better.
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/catalog" role="button">
            Catalog
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
