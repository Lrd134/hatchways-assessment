import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tag from './Tag';

class TagContainer extends Component {

  renderNewTagButton = () => {
    return (
      <button id="tag">New Tag</button>
    )
  }
  
  renderTags = () => {
    return tags.map(tag => {
      <Tag tag={tag}/>
    })
  }
  
  render() {
    return (
      <div>
        {tags ? renderTags() : null}
      </div>

    ) 
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);