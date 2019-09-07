import { FETCH_DOGS } from '../actions/DogActions';

const initialState = {
  dogs: [
    {
      name: 'spot'
    },
    {
      name: 'pepper'
    },
    {
      name: 'salt'
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOGS:
      return state;
    default:
      return state;
  }
}
