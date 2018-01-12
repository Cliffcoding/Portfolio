import React, {Component} from 'react';
import Header from './components/header';
import About from './components/about';
import {WOW} from 'wowjs';

import videoMp4 from './images/busy-people.mp4';
import videoWebm from './images/busy-people.webm';
import socialSvg from './images/sprite.svg';
import resumeDisplay from './images/Jason-Clifton-Resume.pdf';

class App extends Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    return (<div className="App">
      <main>
        <section className="sidebar">
          <div className="sidebar__container">
            <div className="sidebar__logo">logo</div>
            <div className="sidebar__social">
              <ul className="social__list">
                <li className="social__item">
                  <a href="https://twitter.com/Jbonus1473" className="social__link">
                    <svg className="social__icon">
                      <use xlinkHref={socialSvg + "#icon-brand6"}></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="https://github.com/Cliffcoding" className="social__link">
                    <svg className="social__icon">
                      <use xlinkHref={socialSvg + "#icon-brand"}></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="https://www.linkedin.com/in/cliffcoding/" className="social__link">
                    <svg className="social__icon">
                      <use xlinkHref={socialSvg + "#icon-brand3"}></use>
                    </svg>
                  </a>
                </li>
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
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoWebm} type="video/webm"/>
                Your browser is not supported!
              </video>
            </div>
            <div className="bg-video__cover"></div>
          </div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>About Me</a>
              </li>

              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>02</span>Projects</a>
              </li>

              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>03</span>Resume</a>
              </li>

              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>04</span>Contact me!</a>
              </li>
            </ul>
          </nav>
        </div>
        <Header/>
        <About/>
        <section className="projects">
          <div className="project__heading heading--main">
            Projects
            <span className="heading--dash"></span>
          </div>
          <div className="projects__box">
            <div className="project project--1">
              <a href="https://github.com/Cliffcoding/MacroMan" className="project__link">MacroMan</a>
            </div>
            <div className="project project--2">
              <a href="https://github.com/JAMMS-g51" className="project__link">Jello</a>
            </div>
            <div className="project project--3">
              <a href="https://github.com/taparoo" className="project__link">Taparoo</a>
            </div>
            <div className="project project--4">
              <a href="https://github.com/Cliffcoding/Capstone-Display" className="project__link">Mirror Mirror</a>
            </div>
          </div>
        </section>
        <section className="resume">
          <div className="resume__heading heading--main">
            Resume
            <span className="heading--dash"></span>
          </div>
          <object className="resume__display" data={resumeDisplay}>
            Resume</object>
        </section>
        <section className="contact">
          <form action="" className="contact__form">
            <div className="form__group">
              <input type="text" className="form__input" id="name" placeholder="Full Name" required="required" />
                <label htmlFor="name" className="form__label">Full Name</label>
              </div>
              <div className="form__group">
                <input type="email" className="form__input" id="email" placeholder="Email Address" required="required" />
                  <label htmlFor="name" className="form__label">Email Address</label>
                </div>
                <textarea name="Message" id="" cols="30" rows="10" className="form__message form__input"></textarea>
              </form>
            </section>
            <footer className="footer">
              Footer Section
            </footer>
          </main>

        </div>);
  }
}

export default App;
