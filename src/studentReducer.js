const studentReducer = (state = {
  users: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
    case("GET_USERS"): {
      for (let student of action.payload.students) {
        student.tags = [];
      }
      return { ...state, users: action.payload.students, requesting: false}
    }
    case("NEW_TAG"): {
      for (let student of state.users) {
        if (student.firstName === action.payload.name)
          student.tags.push(action.payload.tag)
        
      }
      return {...state, requesting: false}
    }
    default:
      return { ...state, requesting: false }
  }
};

export default studentReducer;