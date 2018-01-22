import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        Rendering a top-level react component!

        <div className="bootstrap-test container">
          <div className="row">Bootstrap test - if vendor CSS has been cached correctly, bootstrap column behavior should be intact:</div>
          <div className="row">
            <div className="col-sm-4">col 1</div>
            <div className="col-sm-4">col 2</div>
            <div className="col-sm-4">col 3</div>
          </div>
        </div>
      </div>
    );
  }
}
