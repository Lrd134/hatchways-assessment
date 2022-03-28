import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tag from './Tag';

class TagContainer extends Component {

  state = {
    renderTagForm: false
  }
  renderNewTagButton = () => {

    return (
      <button id="tag">New Tag</button>
    )
  }
  
  renderTags = () => {
    return this.props.tags.map(tag => {
      <Tag tag={tag}/>
    })
  }
  
  render() {
    return (
      <div>
        {this.props.tags ? this.renderTags() : null}
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