import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tag from './Tag';
import './TagContainer.css';
class TagContainer extends Component {

  state = {
    renderTagForm: false,
    tag: ""
  }

  renderNewTagButton = () => {
    return (
      <button onClick={event => {
        this.setState({renderTagForm: !this.state.renderTagForm})
      }} id="tag">New Tag</button>
    )
  }

  newTag = event => {
    event.preventDefault();
    if (this.state.tag !== "") {
      const tag = {
        name: this.props.name,
        tag: this.state.tag
      }
      this.props.newTag(tag);
      this.setState({
        tag: "",
        renderTagForm: false
      })
    }
    else {
      alert("Please enter a tag before submitting.");
    }
      
    
  }

  handleChange = event => {
    this.setState({
      tag: event.target.value
    })
  }
  
  renderTags = () => this.props.tags.map(tag => (<Tag tag={tag}/>))
  
  render() {
    return (
      <div>
        {this.props.tags.length >= 1 ? this.renderTags() : null}
        <form onSubmit={this.newTag}>
          <input placeholder="Add a tag" value={this.state.tag} onChange={this.handleChange} className="new tag form" type="text"/>
        </form>
      </div>

    ) 
  }

}

// const mapStateToProps = ({students}) => {
//   return ({
//     students
//   });
// };
const mapDispatchToProps = (dispatch) => {
  return ({
    newTag: tag => {
      dispatch({payload: tag, type:"NEW_TAG"})
    }
  });
};

export default connect(null, mapDispatchToProps)(TagContainer);