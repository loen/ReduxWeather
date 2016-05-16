import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action ) {
  switch (action.type) {
    case FETCH_WEATHER:
      //never ever modify the state always
      //return new one since it's immutable
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
