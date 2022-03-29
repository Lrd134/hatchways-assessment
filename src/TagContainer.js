import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tag from './Tag';

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

  renderNewTagForm = () => (<form onSubmit={this.newTag}>
    <button onClick={event => {
      event.preventDefault()
      this.setState({
        renderTagForm: !this.state.renderTagForm
      })
    }}>X</button>
    <input value={this.state.tag} onChange={this.handleChange} className="new tag form" type="text"/>
    <input className="new tag form" type="submit"/>
  </form>)

  renderTags = () => this.props.tags.map(tag => (<Tag tag={tag}/>))
  
  render() {
    return (
      <div>
        {this.props.tags.length > 1 ? this.renderTags() : null}
        {this.state.renderTagForm ? this.renderNewTagForm() : this.renderNewTagButton()}
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