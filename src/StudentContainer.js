import React, {Component} from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import './StudentContainer.css';
class StudentContainer extends Component {
  state = {
    studentTerm: "",
    tagTerm: ""
  }
  componentDidMount() {
    if (!this.props.students.requesting && this.props.students.length === 0)
      this.props.fetchStudents();
      fetch("https://api.hatchways.io/assessment/students").then(
        resp => resp.json()
      ).then(
        json => this.props.getStudents(json)
      )
  }
  studentSearch = event => {
    this.setState({
      studentTerm: event.target.value.toLowerCase()
    })
  }
  tagSearch = event => {
    this.setState({
      tagTerm: event.target.value.toLowerCase()
    })
  }

  ifSearchingTag = (student) => {
    if (this.state.tagTerm === "")
      return true;
    return student.tags.filter(tag => tag.toLowerCase().includes(this.state.tagTerm)).length >= 1 ? true : false
  }

  renderStudents = () => {
    return this.props.students.filter(student => student.firstName.concat(' ', student.lastName).toLowerCase().includes(this.state.studentTerm) && 
    this.ifSearchingTag(student)).map(student => (<Student student={student}/>))
  }
  render() {
    return (
      <div className="student container">
        <input className="student" type="text" onChange={this.studentSearch}/>
        <input className="tag" type="text" onChange={this.tagSearch}/>
        {this.props.students.length === 0 ? (<p>Please Wait...</p>) : this.renderStudents()}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getStudents: studentData => {
      dispatch({type: "GET_STUDENTS", payload: studentData })
    },
    fetchStudents: () => {
      dispatch({type: "FETCH"})
    }
  }
}
const mapStateToProps = state => ({
  students: state.students
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);