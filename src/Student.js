import React, { useState } from 'react';
import TagContainer from './TagContainer';
import './Student.css';
import minus from './grey_minus.png';
import plus from './grey_plus.png';
function Student({student}) {
  const avgGrades = gradeArr => (gradeArr.reduce((prevVal, currVal) =>
    parseFloat(prevVal) + parseFloat(currVal)) / gradeArr.length).toFixed(2)
  let [checked, setChecked] = useState(false);
  const onCheck = event => {
    event.preventDefault();
    setChecked(!checked);
  }
  const renderGrades = () => student.grades.map((grade, index) => (<p className="grades">Test {index + 1}:<span className="tab"></span>{grade}%</p>))
  return (
    <div className="student">
      <img src={student.pic}/>
      <input alt={checked ? "minus" : "plus"} type="image" src={checked ? minus : plus} className="student" onClick={onCheck}/>
      
      <div className="student information">
      <h1>{student.firstName.concat(" ", student.lastName).toUpperCase()} </h1>
      <p>Email: {student.email}</p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {avgGrades(student.grades)}</p>
      </div>
      
      
      {checked ? (renderGrades()) : null}
      
      <TagContainer tags={student.tags} name={student.firstName}/>
    </div>
  )
}
export default Student;