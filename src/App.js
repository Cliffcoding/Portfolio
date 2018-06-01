import React, {Component} from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import {ProjectData} from './projectData';
import {WOW} from 'wowjs';

import socialSvg from './images/sprite.svg';
import resumeDisplay from './images/Jason-Clifton-Resume.pdf';

import {sendEmail} from './API';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {
    }
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
            {ProjectData.map((project) => {
              return(<Project
                key={project.name}
                name={project.name}
                projectDescription= {project.description}
                projectLink={project.link}
                projectStyle={project.style}
                projectTechs={project.techUsed}
                />
            )
            })}
          </div>
        </section>
        <section  className="resume">
          <div id="resume" className="resume__heading heading--main">
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
