const studentReducer = (state = {
  students: [],
  requesting: false
}, action) => {
  switch(action.type) {
    case("FETCH"):
      return {...state, requesting: true}
    case("GET_STUDENTS"): {
      for (let student of action.payload.students) {
        student.tags = [];
      }
      return { ...state, students: action.payload.students, requesting: false}
    }
    case("NEW_TAG"): {
      for (let student of state.students) {
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