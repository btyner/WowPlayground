import { REALM_LIST } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case REALM_LIST:
      return action.payload.data.realms;
  }
  return state;
}
