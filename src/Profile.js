import React, { useState } from 'react';
import TagContainer from './TagContainer';
import './Profile.css';

function Profile({user}) {
  const avgGrades = gradeArr => (gradeArr.reduce((prevVal, currVal) =>
    parseFloat(prevVal) + parseFloat(currVal)) / gradeArr.length).toFixed(2)
  let [checked, setChecked] = useState(false);
  const onCheck = event => {
    event.preventDefault();
    setChecked(!checked);
  }
  const renderGrades = () => user.grades.map((grade, index) => (<p className="grades">Test {index + 1}:<span className="tab"></span>{grade}%</p>))
  return (
    <div className="profile">
      <img src={user.pic}/>
      <button className="profile" onClick={onCheck}/>
      
      <div className="profile information">
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <p>Skill: {user.skill}</p>
      <p>Average: {avgGrades(user.grades)}</p>
      <TagContainer/>
      </div>
      
      {checked ? (renderGrades()) : null}
    </div>
  )
}
export default Profile;