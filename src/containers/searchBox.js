import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { characterInfo } from '../actions';
import RealmList from './realmList';

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
      <form onSubmit={this.onFormSubmit} className="form-inline">
        <RealmList onChange={this.onSelectChange} />
        <div className="form-group">
          <label for="txtCharacterName"> Character Name: </label>
          <input
            id="txtCharacterName"
            placeholder="Enter character name."
            className="form-control"
            value={this.state.name}
            onChange={this.onInputChange} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
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
