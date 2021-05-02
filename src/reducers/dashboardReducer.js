import { serviceUrl, tiledata } from "../actions/index";

const initialState = {
  serviceUrl: process.env.REACT_APP_SERVICE_URL,
  tiledata: []
};

function dashboardReducer(state = initialState, actions) {
  switch (actions.type) {
    case serviceUrl:
      return { ...state, serviceUrl: actions.serviceUrl };
      case tiledata:
        return { ...state, tiledata: actions.tiledata };
    default:
      return state;
  }
}

export default dashboardReducer;
