import React, { Component } from 'react';
import NavBarLink from './navbarLink';
import LinkSocial from './linkSocial';
import socialSvg from '../images/sprite.svg';


class NavBar extends Component {
  render () {
    return (
      <div>
        <section className="sidebar">
          <div className="sidebar__container">
            <svg className="sidebar__logo">
              <use xlinkHref={socialSvg + "#icon-portfolio-logo2"}></use>
            </svg>
            <div className="sidebar__social">
              <ul className="social__list">
                <LinkSocial linkURL="https://twitter.com/Jbonus1473" SVG={socialSvg + "#icon-brand6"}/>
                <LinkSocial linkURL="https://github.com/Cliffcoding" SVG={socialSvg + "#icon-brand"}/>
                <LinkSocial linkURL="https://www.linkedin.com/in/cliffcoding" SVG={socialSvg + "#icon-brand3"}/>
              </ul>
            </div>
          </div>
        </section>
        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon"></span>
          </label>
          <div className="navigation__background">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="https://res.cloudinary.com/jcliff1473/video/upload/v1530666784/busy-people_tuig9v.mp4" type="video/mp4"/>
                <source src="https://res.cloudinary.com/jcliff1473/video/upload/v1530666804/busy-people_rvgut9.webm" type="video/webm"/>
                Your browser is not supported!
              </video>
            </div>
            <div className="bg-video__cover"></div>
          </div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <NavBarLink number="01" id="#about" name="About Me" />
              <NavBarLink number="02" id="#project" name="Projects" />
              <NavBarLink number="03" id="#resume" name="Resume" />
              <NavBarLink number="04" id="#contact" name="Contact me!" />
            </ul>
          </nav>
        </div>
    </div>
    )
  }
}

export default NavBar;
