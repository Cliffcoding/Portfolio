import React, {Component} from 'react';
class NavBarLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }
  handleClick(e) {
    document.getElementById("navi-toggle").checked = false;

  }
  render() {
    return (<li className="navigation__item">
      <a onClick={this.handleClick} href={this.props.id} className="navigation__link">
        <span>{this.props.number}</span>{this.props.name}
      </a>
    </li>
  )
  }
}
export default NavBarLink;
