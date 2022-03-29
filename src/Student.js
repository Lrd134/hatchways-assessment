import React, { useState } from 'react';
import TagContainer from './TagContainer';
import './Student.css';

function Student({user}) {
  const avgGrades = gradeArr => (gradeArr.reduce((prevVal, currVal) =>
    parseFloat(prevVal) + parseFloat(currVal)) / gradeArr.length).toFixed(2)
  let [checked, setChecked] = useState(false);
  const onCheck = event => {
    event.preventDefault();
    setChecked(!checked);
  }
  const renderGrades = () => user.grades.map((grade, index) => (<p className="grades">Test {index + 1}:<span className="tab"></span>{grade}%</p>))
  return (
    <div className="student">
      <img src={user.pic}/>
      <button className="student" onClick={onCheck}/>
      
      <div className="student information">
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <p>Skill: {user.skill}</p>
      <p>Average: {avgGrades(user.grades)}</p>
      <TagContainer tags={user.tags} name={user.firstName}/>
      </div>
      
      {checked ? (renderGrades()) : null}
    </div>
  )
}
export default Student;