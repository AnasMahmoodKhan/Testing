import moxios from "moxios";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { fetchPosts } from "../actions";
import rootReducer from '../reducers';

const middlewares = [ReduxThunk];

const testStore = (initialState) => {

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        body: "Some Text",
      },
      {
        title: "Example title 2",
        body: "Some Text",
      },
      {
        title: "Example title 3",
        body: "Some Text",
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
