import React, {Component} from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer'
import {WOW} from 'wowjs';

import socialSvg from './images/sprite.svg';
import resumeDisplay from './images/Jason-Clifton-Resume.pdf';

import {sendEmail} from './API';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {}
  }
  componentDidMount() {
    new WOW().init();
  }

  handleEmail(data) {
    sendEmail(data).then(response => {
      this.setState({emailStatus: response.data.message})
      console.log(response);
      console.log(this.state);
    });
  }
  render() {
    return (<div className="App">
      <main>
        <NavBar/>
        <Header/>
        <About/>
        <section id="project" className="projects">
          <div className="project__heading heading--main">
            Projects
            <span className="heading--dash"></span>
          </div>
          <div className="projects__box">
            <Project name="MacroMan" projectLink="https://github.com/Cliffcoding/MacroMan" projectStyle="project--1 "/>

            <Project name="Jello"
              projectLink="https://github.com/JAMMS-g51"
              projectStyle="project--2 "/>

            <Project name="Taparoo"
              projectLink="https://github.com/taparoo"
              projectStyle="project--3 "/>

            <Project name="MirrorMirror" projectLink="https://github.com/Cliffcoding/Capstone-Display" projectStyle="project--4 "/>
          </div>
        </section>
        <section id="resume" className="resume">
          <div className="resume__heading heading--main">
            Resume
            <span className="heading--dash"></span>
          </div>
          <object className="resume__display" data={resumeDisplay}>
            Resume</object>
        </section>
        <Contact handleEmail={this.handleEmail} sendLogo={socialSvg + "#icon-paper-plane"} message={this.state.emailStatus}/>
        <Footer/>
      </main>

    </div>);
  }
}

export default App;
