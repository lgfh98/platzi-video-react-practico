import { SET_FAVORITE, DELETE_FAVORITE } from "@actions/actionNames";

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

    default:
      return state;
  }
};

export { reducer };
