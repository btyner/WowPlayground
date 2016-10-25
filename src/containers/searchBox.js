import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { characterInfo } from '../actions';
import RealmList from './realmList';

import "./searchBox.sass";

class SearchBox extends Component {
  constructor (props) {
    super(props);

    this.state = { name: '', selectedRealm: '' };

    this.onSelectChange = this.onSelectChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onSelectChange(event) {
    console.log("Selected Realm: ", event.target.value);
    this.setState({selectedRealm: event.target.value});
  }

  onInputChange(event) {
    this.setState({name: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();

    this.props.characterInfo(this.state.selectedRealm, this.state.name);

    // this.setState({realm: '', name: ''});
  }



  render() {
    return (
      <div className="SearchBox">
        <div className="container">
          <div className="row">
            <form onSubmit={this.onFormSubmit} >
              <div className="col-md-3">
                <RealmList onChange={this.onSelectChange} />
              </div>
              <div className="col-md-9">
                <div className="input-group">
                  <label className="sr-only" htmlFor="txtCharacterName">Character Name</label>
                  <input
                    id="txtCharacterName"
                    placeholder="Enter character name."
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onInputChange} />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ characterInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
