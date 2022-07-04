import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Campaign Action', () => {
  const middlewares = [ thunk ];
  const mockStore = configureMockStore(middlewares);
  function success() {
    return {
      type: 'GET_CAMPAIGN_WITH_USER'
    }
  }
  
  function getCampaignList () {
     return async dispatch => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(() => dispatch(success()))
    };
  }
  
  it('should execute fetch user', () => {
    const store = mockStore({})
    return store.dispatch(getCampaignList())
      .then(() => {
        const actions = store.getActions()
        expect(actions[ 0 ]).toEqual(success())
      })
  })

});
