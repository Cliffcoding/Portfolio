import React from 'react';
const LinkSocial = (prop) => {
  return(
    <li className="social__item">
      <a href={prop.linkURL} className="social__link">
        <svg className="social__icon">
          <use xlinkHref={prop.SVG}></use>
        </svg>
      </a>
    </li>
  )
}
export default LinkSocial;
