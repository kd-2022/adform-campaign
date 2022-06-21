import { configure, shallow } from "enzyme";
import { getByPlaceholderText, render, screen } from '@testing-library/react';
import {within} from '@testing-library/dom'
import Adapter from "enzyme-adapter-react-16";
import { Provider } from 'react-redux';
import Campaign from "./Component/Campaign";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

configure({ adapter: new Adapter() });

describe("Campaign Component", () => {
  const initialState = { output: 10 };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;
  it("renders search Child component", () => {
    store = mockStore(initialState);

      const { getByPlaceholderText } = render(
          <Provider store={store}>
              <Campaign />
          </Provider>
      );

      expect(getByPlaceholderText("Search By Name")).toBeInTheDocument();
  });
});
