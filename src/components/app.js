import React, { Component } from 'react';

import SearchBox from '../containers/searchBox';

import "./app.sass";

export default class App extends Component {
  render() {
    return (
      <div className="MasterContainer">
        <SearchBox />
      </div>
    );
  }
}
