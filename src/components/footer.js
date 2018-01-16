import React from 'react';
import socialSvg from '../images/sprite.svg';


const Footer = () => {
  return(
    <footer className="footer">
      <svg className="footer__logo">
        <use xlinkHref={socialSvg + "#icon-portfolio-logo2"}></use>
      </svg>
      <p className=" footer__text">
      2018 &copy;
        Made by yours truly using <svg className="social__icon"><use xlinkHref={socialSvg + "#icon-brand2"}></use></svg> with
        <svg className="social__icon"><use xlinkHref={socialSvg + "#icon-brand4"}></use></svg>
        and styled using
        <svg className="social__icon"><use xlinkHref={socialSvg + "#icon-brand5"}></use></svg>
      </p>
    </footer>
  )
}
export default Footer;
