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
  renderNewTagForm = () => (<form>
    <input className="new tag form" type="text"/>
    <input className="new tag form" type="submit"/>
  </form>)
  renderTags = () => {
    return this.props.tags.map(tag => {
      <Tag tag={tag}/>
    })
  }
  
  render() {
    return (
      <div>
        {this.props.tags ? this.renderTags() : null}
        {this.state.renderTagForm ? this.renderNewTagForm() : this.renderNewTagButton()}
      </div>

    ) 
  }

}

// const mapStateToProps = ({users}) => {
//   return ({
//     users
//   });
// };
const mapDispatchToProps = (dispatch) => {
  return ({
    newTag: tag => dispatch({payload: tag, type:"NEW_TAG"})
  });
};

export default connect(null, mapDispatchToProps)(TagContainer);