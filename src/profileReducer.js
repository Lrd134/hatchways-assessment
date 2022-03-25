const profileReducer = (state = {
  users: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
    case("GET_USERS"):
      return { ...state, users: action.payload.students, requesting: false}
    default:
      return { ...state, requesting: false }
  }
};

export default profileReducer;