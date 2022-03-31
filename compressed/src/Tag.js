import React from 'react';
import './Tag.css';


function Tag({tag}) {
  return (
    <>
    <button className="tag">{tag}</button>
    </>
  )
}

export default Tag;