import { SHOW } from "../actionTypes";

const initialState = {
  show: false,
};

export default function ModalLogin(state = initialState, action) {
  switch (action.type) {
    case SHOW: {
      return { ...state, show: !state.show };
    }
    default:
      return state;
  }
}
