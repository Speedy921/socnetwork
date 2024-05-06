import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Its my first post", likesCount: 11 },
    { id: 3, message: "Чому не державною", likesCount: 1488 },
  ],
};

it("new post should be added", () => {
  // 1. test data
  let action = addPostActionCreator("it.com");
  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.postsData.length).toBe(4);
});

it("after deleting length of message should be decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.postsData.length).toBe(3);
});
