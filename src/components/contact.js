import React, {Component} from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.updateFormState = this.updateFormState.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.state ={
      email: '',
      subject: '',
      message: ''
    };
  }
  updateFormState(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }
  submitEmail(event){
    event.preventDefault();
    this.props.handleEmail(this.state);
  }
  render() {
    return (
      <section className="contact">
        <div className="contact__heading heading--main">
          Let's get in touch.
          <span className="heading--dash"></span>
        </div>
        <form onSubmit={this.submitEmail} className="contact__form" method="post">
          <div className="form__group">
            <input name="email" onChange={this.updateFormState} value={this.state.email} type="email" className="form__input" id="email" placeholder="Email Address" required="required"/>
            <label htmlFor="name" className="form__label">Email Address</label>
          </div>
          <div className="form__group">
            <input  name="subject" onChange={this.updateFormState} value={this.state.subject} type="text" className="form__input" id="subject" placeholder="Subject" required="required"/>
            <label htmlFor="subject" className="form__label">Subject</label>
          </div>
          <textarea name="message" onChange={this.updateFormState} value={this.state.message} id="" cols="30" rows="10" className="form__message form__input"></textarea>
          <button type="submit" className="form__button">Submit</button>
        </form>
      </section>
    )
  }
}

export default Contact;
