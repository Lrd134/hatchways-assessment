import React, {Component} from 'react';
import { connect } from 'react-redux';
class ProfileContainer extends Component {
  render() {
    return (
      <div className="profile container">
      
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: userData => {
      dispatch(userData, {type: "GET_USERS"})
    }
  }
}
const mapStateToProps = state =>  {
  users: state.users
}

export default connect(mapStateToProps, mapDispatchToProps)