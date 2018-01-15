import React, {Component} from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.updateFormState = this.updateFormState.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.state = {
      email: '',
      subject: '',
      message: ''
    };
  }
  updateFormState(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }
  submitEmail(event) {
    event.preventDefault();
    this.props.handleEmail(this.state);
  }
  render() {
    return (
      <section className="contact">
        <div className="contact__form">
          <div className="form__group">
            <div className="form__heading heading--main">
              Let's chat.
            </div>
            <form onSubmit={this.submitEmail} className="form" method="post">
              <input name="email" onChange={this.updateFormState} value={this.state.email} type="email" className="form__input" id="email" placeholder="Email Address" required="required"/>
              <label htmlFor="name" className="form__label">Email Address</label>
              <input name="subject" onChange={this.updateFormState} value={this.state.subject} type="text" className="form__input" id="subject" placeholder="Subject" required="required"/>
              <label htmlFor="subject" className="form__label">Subject</label>
              <textarea name="message" onChange={this.updateFormState} value={this.state.message} id="" cols="30" rows="10" className="form__message form__input" required="required" placeholder="Send me a message"></textarea>
              <button type="submit" className="form__button">Submit</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
