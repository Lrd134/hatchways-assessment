import React, { useState } from 'react';
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
      </div>
      
      {checked ? (renderGrades()) : null}
    </div>
  )
}
// {
//   '0': {
//     city: 'Fushë-Muhurr',
//     company: 'Yadel',
//     email: 'iorton0@imdb.com',
//     firstName: 'Ingaberg',
//     grades: [
//       '78',
//       '100',
//       '92',
//       '86',
//       '89',
//       '88',
//       '91',
//       '87'
//     ],
//     id: '1',
//     lastName: 'Orton',
//     pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
//     skill: 'Oracle'
//   }
// }
export default Profile;