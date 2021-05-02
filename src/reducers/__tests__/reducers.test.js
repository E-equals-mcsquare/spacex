import { serviceUrl } from "../../actions";
import reducers from "../index";
import dashboardReducer from "../dashboardReducer";
import * as actions from "../../actions";

describe("Testing Redux", () => {
  it("should update the serviceUrl", () => {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    const text = "Finish docs";
    const expectedAction = {
      type: "serviceUrl",
      url,
    };
    // expect(reducers(undefined, actions.serviceUrl)).toEqual(expectedAction)
    expect(dashboardReducer([], {
      type: serviceUrl,
      serviceUrl: url
    })
    ).toEqual(
      {
        serviceUrl: url
      }
    );
  });
});
