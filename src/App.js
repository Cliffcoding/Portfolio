import React, {Component} from 'react';
import Header from './components/header';
import About from './components/about';
import {WOW} from 'wowjs';

import videoMp4 from './images/busy-people.mp4';
import videoWebm from './images/busy-people.webm';

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
            <div className="sidebar__social-links">social links</div>
          </div>
        </section>
        <div className="navigation">
          <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
          <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon"></span>
          </label>
          <div class="navigation__background">
            <div class="bg-video">
              <video class="bg-video__content" autoplay="autoplay" muted="muted" loop="loop">
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoWebm} type="video/webm"/>
                Your browser is not supported!
              </video>
            </div>
            <div className="bg-video__cover"></div>
          </div>
          <nav class="navigation__nav">
            <ul class="navigation__list">
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>01</span>About Me</a>
              </li>

              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>02</span>Projects</a>
              </li>

              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>03</span>Resume</a>
              </li>

              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>04</span>Contact me!</a>
              </li>
            </ul>
          </nav>
        </div>
        <Header/>
        <About/>
        <section className="projects">
          <div className="projects__heading">
            Projects
            <span className="projects__dash"></span>
          </div>
          <div className="projects__box">
            <div className="project project--1">
              <a href="#" className="project__link">Project 1</a>
            </div>
            <div className="project project--2">
              <a href="#" className="project__link">Project 2</a>
            </div>
            <div className="project project--3">project 3</div>
            <div className="project project--4">project 4</div>
            <div className="project project--5">project 5</div>
            <div className="project project--6">project 6</div>

          </div>
        </section>
        <section className="resume"></section>
        <section className="contact">
          <div className="contact__links">
            <a href="" className="contact__link">LinkedIn</a>
            <a href="" className="contact__link">GitHub</a>
            <a href="" className="contact__link">Twitter</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        Footer Section
      </footer>
    </div>);
  }
}

export default App;
