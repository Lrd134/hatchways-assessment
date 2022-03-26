import React, {Component} from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import './ProfileContainer.css';
class ProfileContainer extends Component {
  state = {
    searchTerm: ""
  }
  componentDidMount() {
    if (!this.props.users.requesting && this.props.users.length === 0)
      this.props.fetchUsers();
      fetch("https://api.hatchways.io/assessment/students").then(
        resp => resp.json()
      ).then(
        json => this.props.getUsers(json)
      )
  }
  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value.toLowerCase()
    })
  }
  renderUsers = () => {
    return this.props.users.filter(user => user.firstName.concat(' ', user.lastName).toLowerCase().includes(this.state.searchTerm)).map(user => (<Profile user={user}/>))
  }
  render() {
    return (
      <div className="profile container">
        <input className="profile" type="text" onChange={this.handleSearch}/>
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