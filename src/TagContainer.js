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

const mapStateToProps = ({users}) => {
  return ({
    users
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    newTag: tag => dispatch({payload: tag, type:"NEW_TAG"})
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);