import React, { Component } from 'react';
class Project extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      active:false
    }
  }
  handleClick(e){
    e.preventDefault;
    !this.state.active ? this.setState({ active: true}) : this.setState({ active: false})
  }
  render(){
  return (
      <div onClick={this.handleClick} className={this.state.active ? 'project__active ' + this.props.projectStyle : 'project ' + this.props.projectStyle}>
        <a href={this.props.projectLink} className="project__link">{this.props.name}</a>
          { this.state.active &&
            <div className="description">
              <div className="description__heading">
                What is it?
              </div>
              <div className="description__text">
                {this.props.projectDescription}
              </div>
              <div className="description__heading">
                Built with
              </div>
              <div className="description__tech">
                <small>{this.props.projectTechs}</small>
              </div>
            </div>
          }
      </div>
  )}
}
export default Project;
