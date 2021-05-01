import { serviceUrl } from "../actions/index";

const initialState = {
  serviceUrl: process.env.REACT_APP_SERVICE_URL,
};

function dashboardReducer(state = initialState, actions) {
  switch (actions.type) {
    case serviceUrl:
      return { ...state, serviceUrl: actions.serviceUrl };
    default:
      return state;
  }
}

export default dashboardReducer;
