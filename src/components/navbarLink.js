import React from 'react';
const NavBarLink = (prop) => {
  return (
    <li className="navigation__item">
      <a href={prop.id} className="navigation__link">
        <span>{prop.number}</span>{prop.name}</a>
    </li>
  )
}
export default NavBarLink;
