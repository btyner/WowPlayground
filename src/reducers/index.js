import { combineReducers } from 'redux';
import CharacterInfo from './reducer_characterInfo';
import RealmData from './reducer_realmList';

const rootReducer = combineReducers({
  character: CharacterInfo,
  realms: RealmData
});

export default rootReducer;
