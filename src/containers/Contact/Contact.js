import React, { Component } from "react";
import classes from "./Contact.module.css";
import { Helmet } from "react-helmet";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import NavBarSmall from "../../components/Navigation/NavBarSmall";
import axios from "../../axios-instance";

class Contact extends Component {
  state = {
    contactForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      notes: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Message",
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedContactForm = {
      ...this.state.contactForm,
    };
    const updatedFormElement = {
      ...updatedContactForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedContactForm[inputIdentifier] = updatedFormElement;
    this.setState({ contactForm: updatedContactForm });

    if (this.checkValidity(event.target.value, this.state.contactForm[inputIdentifier].validation)) {
      updatedFormElement.valid = true;
      console.log("validation passed");
    }

    // if (this.state.contactForm[inputIdentifier].value.length > 2 && inputIdentifier == "name") {

    //   console.log(this.state.contactForm.name.touched);
    // }
  };

  contactHandler = (event) => {
    event.preventDefault();
    // if form is not valid, it should stop function execution
    if (this.state.contactForm.name.valid === false) {
      console.log("too short");
      return;
    }
    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
    }
    axios
      .post("/enquiries/add", formData)
      .then((resp) => {
        console.log(resp);
        console.log(this.state.contactForm);
        this.props.close ? this.props.close() : this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.contactForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key],
      });
    }
    let form = (
      <form onSubmit={this.contactHandler} className={classes.form}>
        <h3>Contact</h3>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        {(!this.state.contactForm.name.valid && this.state.contactForm.name.touched) ||
        (!this.state.contactForm.email.valid && this.state.contactForm.email.touched) ||
        (!this.state.contactForm.notes.valid && this.state.contactForm.notes.touched) ? (
          <p className={classes.errorText}>Please fill the form with your details! All fields required...</p>
        ) : (
          ""
        )}

        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    );
    return (
      <div className={classes.Contact}>
        <Helmet>
          {/* <title>Contact Us*</title> */}
          <link rel="canonical" href={window.location.hostname + "/contact"} />
        </Helmet>

        <div className={classes.container}>{form}</div>
        <hr className="animated"></hr>
        <NavBarSmall />
      </div>
    );
  }
}

export default Contact;
