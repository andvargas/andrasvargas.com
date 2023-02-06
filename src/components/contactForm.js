// for some reason is not working when submitting 11 Apr. AV
import React, { Component } from "react";
import classes from "../containers/Contact/Contact.module.css";

import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import axios from "../axios-instance";

class ContactForm extends Component {
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
    updatedContactForm[inputIdentifier] = updatedFormElement;
    this.setState({ contactForm: updatedContactForm });
  };

  contactHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
    }
    axios
      .post("/enquiries/add", formData)
      .then((resp) => {
        console.log(resp);
        // this.props.onClose()
        // this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.onClose();
  };

  render(props) {
    console.log(this.props);
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
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    );
    return (
      <div className={classes.Contact}>
        <div className={classes.container}>{form}</div>
      </div>
    );
  }
}
export default ContactForm;
