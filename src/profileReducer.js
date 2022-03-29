const profileReducer = (state = {
  users: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
    case("GET_USERS"): {
      for (let profile of action.payload.students) {
        profile.tags = [];
      }
      return { ...state, users: action.payload.students, requesting: false}
    }
    case("NEW_TAG"): {
      for (let profile of state.users) {
        if (profile.firstName === action.payload.name)
          profile.tags.push(action.payload.tag)
        
      }
      return {...state, requesting: false}
    }
    default:
      return { ...state, requesting: false }
  }
};

export default profileReducer;