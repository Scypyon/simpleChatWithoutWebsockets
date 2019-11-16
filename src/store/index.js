import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { chatServicesReducer } from "Modules/Chat/ChatServicesReducer";

const reducers = combineReducers({
  comments: chatServicesReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
