import React from 'react';


function Tag({tag}) {
  return (
    <>
    <button className="tag">{tag.type}</button>
    </>
  )
}

export default Tag;