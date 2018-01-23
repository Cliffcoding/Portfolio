import React, {Component} from 'react';
class Project extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false
    }
  }
  handleClick(e) {
    !this.state.active
      ? this.setState({active: true})
      : this.setState({active: false})

    document.getElementById(this.props.name).scrollIntoView(true);
  }
  render() {
    return (<div className="project">
      <input type="checkbox" className="project__checkbox" id={this.props.name}/>
      <label onClick={this.handleClick} htmlFor={this.props.name} className="project__button">
        <span className="project__icon"></span>
      </label>
      <div className={this.props.projectStyle + ' project__container'}>
        <a href={this.props.projectLink} className="project__link">{this.props.name}</a>
        {
          this.state.active && <div className="description">
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
    </div>)
  }
}
export default Project;
