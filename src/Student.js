import React, { useState } from 'react';
import TagContainer from './TagContainer';
import './Student.css';

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
      <button className="student" onClick={onCheck}/>
      
      <div className="student information">
      <h1>{student.firstName} {student.lastName}</h1>
      <p>Email: {student.email}</p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {avgGrades(student.grades)}</p>
      <TagContainer tags={student.tags} name={student.firstName}/>
      </div>
      
      {checked ? (renderGrades()) : null}
    </div>
  )
}
export default Student;