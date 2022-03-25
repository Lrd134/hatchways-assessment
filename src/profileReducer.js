const ProfileReducer = (state = {
  users: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
      break;
  }
};

export default ProfileReducer;