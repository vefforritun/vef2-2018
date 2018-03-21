import { PROFILE_UPDATE } from '../actions/profile';

const initialState = {
  name: '',
  age: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      return {
        ...state,
        name: action.name,
        age: action.age,
      };
    default:
      return state;
  }
};
