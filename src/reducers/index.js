import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
} from "@actions/actionNames";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE: {
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) {
        return state;
      } else {
        return {
          ...state,
          mylist: exist ? state.mylist : [...state.mylist, action.payload],
        };
      }
    }
    case DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload.id),
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
