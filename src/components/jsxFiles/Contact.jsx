import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import "../cssFiles/Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.toastRef = React.createRef();
    this.state = {
      disable: false
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({
      disable: true
    });

    const templateID_AutoReply = "template_l39zgru";
    const templateID_MessageToMe = "template_lhbf1mt";
    const serviceID = "service_qlz7uec";
    const publicKey = "XIR6ktg6kpicQsvlf";

    const sendPromises = [
      emailjs.sendForm(serviceID, templateID_AutoReply, this.form.current, {
        publicKey: publicKey
      }),
      emailjs.sendForm(serviceID, templateID_MessageToMe, this.form.current, {
        publicKey: publicKey
      })
    ];

    Promise.all(sendPromises).then(
      () => {
        this.showToast(
          "Message sent successfully! 😊, U can send msg again in 30sec"
        );
        console.log("SUCCESS! Both emails sent.");
      },
      (error) => {
        this.showToast(
          "Failed to send. Please try again later after 30Sec.. 😞"
        );
        console.log("FAILED...", error);
      }
    );
    this.form.current.reset();
    setTimeout(() => {
      this.setState({
        disable: false
      });
    }, 30000);
  };

  // tost msg function
  showToast = (message) => {
    if (this.toastRef.current) {
      const toastElement = this.toastRef.current;
      const toastBody = toastElement.querySelector(".toast-body");
      if (toastBody) {
        toastBody.textContent = message;
      }
      const bsToast = new window.bootstrap.Toast(toastElement);
      bsToast.show();
    }
  };

  render() {
    return (
      <>
        <SEO title="Contact Page" description="This is contact page." />
        <div className="contact-container">
          <h3>Contact Me</h3>
          <br/>
          <form className="mainForm" ref={this.form} onSubmit={this.sendEmail}>
            <div>
              <label>Name</label>
              <input type="text" name="Name" required />
            </div>
            <br />
            <div>
              <label>Email</label>
              <input type="email" name="Email" required />
            </div>
            <br />
            <div>
              <label>Message</label>
              <textarea name="Message" required />
            </div>

            <input type="submit" value="Send" disabled={this.state.disable} />
          </form>
        </div>
        {/* This is tost msg */}
        <div className="toast-container position-fixed top-0  p-3">
          <div
            id="liveToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            ref={this.toastRef}
            style={{ color: "white", backgroundColor: "#383838" }}
          >
            <div className="toast-body"></div>
          </div>
        </div>
      </>
    );
  }
}
