import React, {Component} from 'react';
import { connect } from 'react-redux';
class ProfileContainer extends Component {

  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students").then(
      resp => resp.json()
    ).then(
      json => this.props.getUsers(json)
    )
  }

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