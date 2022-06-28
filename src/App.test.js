import { render } from '@testing-library/react';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const middlewares = [ thunk ]
  const mockStore = configureMockStore(middlewares)
  let store;

  it('renders campaign data title"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={ store }>
              <App />
          </Provider>
      );

      expect(getByText(/campaign data/i)).not.toBeNull();
  });
});