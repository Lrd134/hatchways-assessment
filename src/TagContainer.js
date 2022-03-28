import React from 'react';


function TagContainer({tags}) {

  const renderTagButton = () => {
    return (
      <button id="tag">New Tag</button>
    )
  }
  
  return (
    <div>
      
      {renderTagButton()}
    </div>

  )

}


export default TagContainer;