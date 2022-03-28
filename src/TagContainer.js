import React from 'react';
import Tag from './Tag';

function TagContainer({tags}) {

  const renderTagButton = () => {
    return (
      <button id="tag">New Tag</button>
    )
  }
  
  const renderTags = () => {
    return tags.map(tag => {
      <Tag tag={tag}/>
    })
  }
  
  return (
    <div>
      {tags ? renderTags() : null}
      {renderTagButton()}
    </div>

  )

}


export default TagContainer;