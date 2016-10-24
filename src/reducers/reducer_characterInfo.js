import { CHARACTER_INFO } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case CHARACTER_INFO:
      return [ action.payload.data, ...state ];      
  }
  return state;
}
