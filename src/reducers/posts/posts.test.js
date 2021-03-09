import { types } from "./../../actions/types";
import posts from "./reducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = posts(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const postList = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" },
    ];
    const newState = posts(undefined, {
      type: types.GET_POSTS,
      payload: postList,
    });
    expect(newState).toEqual(postList);
  });
});
