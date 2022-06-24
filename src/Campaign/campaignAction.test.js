import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";

describe("Campaign Action", () => {
  const initialState = {};
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  const getCampaign = () => ({ type: "GET_CAMPAIGN" });
  const getCampaignByName = () => ({ type: "SEARCH_CAMPAIGN_BY_NAME" });
  const getCampaignByDate = () => ({ type: "SEARCH_CAMPAIGN_BY_DATE" });
  const displayLoader = () => ({ type: "DISPLAY_LOADER" });

  
  function success() {
    return {
      type: 'GET_CAMPAIGN'
    }
  }
  
  function fetchUser () {
     return async dispatch => {
      return fetch('https://jsonplaceholder.typicode.com/users') // Some async action with promise
        .then(() => dispatch(success()))
    };
  }
  
  it('should execute fetch user', () => {
    const store = mockStore({})
  
    // Return the promise
    return store.dispatch(fetchUser())
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(success())
      })
  })

  
  it("Should dispatch action to get campaign list", () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(getCampaign());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "GET_CAMPAIGN" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("Should dispatch action to get campaign list by name", () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(getCampaignByName());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "SEARCH_CAMPAIGN_BY_NAME" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("Should dispatch action to get campaign list by date", () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(getCampaignByDate());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "SEARCH_CAMPAIGN_BY_DATE" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("Should dispatch action to display loader", () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(displayLoader());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "DISPLAY_LOADER" };
    expect(actions).toEqual([expectedPayload]);
  });

  

});
