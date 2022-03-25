import React, {Component} from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
class ProfileContainer extends Component {

  componentDidMount() {
    if (!this.props.users.requesting && this.props.users.length === 0)
      this.props.fetchUsers();
      fetch("https://api.hatchways.io/assessment/students").then(
        resp => resp.json()
      ).then(
        json => this.props.getUsers(json)
      )
  }

  renderUsers = () => {
    return this.props.users.map(user => (<Profile user={user}/>))
  }
  render() {
    return (
      <div className="profile container">
        {this.props.users.length === 0 ? (<p>Please Wait...</p>) : this.renderUsers()}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: userData => {
      dispatch({type: "GET_USERS", payload: userData })
    },
    fetchUsers: () => {
      dispatch({type: "FETCH"})
    }
  }
}
const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);