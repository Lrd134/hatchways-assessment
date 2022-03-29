const profileReducer = (state = {
  users: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
    case("GET_USERS"):
      return { ...state, users: action.payload.students, requesting: false}
    case("NEW_TAG"): {
      for (let profile of state.users) {
        function noTags() {
          profile.tags = []
          profile.tags.push(action.payload.tag)
        }
        if (profile.firstName === action.payload.name) {
          profile.tags !== undefined ? profile.tags.push(action.payload.tag) : noTags();
        }
      }
      return {...state, requesting: false}
    }
    default:
      return { ...state, requesting: false }
  }
};

export default profileReducer;