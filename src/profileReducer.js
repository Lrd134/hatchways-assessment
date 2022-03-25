const profileReducer = (state = {
  users: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
    default:
      return { ...state, requesting: false }
  }
};

export default profileReducer;