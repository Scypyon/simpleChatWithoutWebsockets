import {
  IS_FETCHING,
  FETCHING_FAILED,
  FETCHING_COMMENTS
} from "./ChatServicesActions";

const initState = { results: [], error: "", isFetching: true };

export const chatServicesReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case FETCHING_COMMENTS:
      return { ...state, results: action.data, error: "", isFetching: false };
    case FETCHING_FAILED:
      return { ...state, error: "Coś poszło nie tak", isFetching: true };
    default: {
      return state;
    }
  }
};
