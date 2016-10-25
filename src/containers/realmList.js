import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {realmList} from '../actions';

class RealmList extends Component {
  constructor(props) {
    super(props);

    this.state = {selectedRealm: ''};

    this.props.realmList()

  }

  render() {
    return (
      <div className="form-group">
        <label className="sr-only" htmlFor="ddlRealms">Realm</label>
        <select id="ddlRealms" className="form-control" onChange={this.props.onChange}>
          <option>"Select a Realm"</option>
          {
            this.props.realms.map((realm) => {
              return <option key={realm.name} value={realm.name}>{realm.name}</option>
            })
          }
        </select>
      </div>
    )
  }
}

function mapStateToProps({realms}) {
  return { realms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({realmList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RealmList);