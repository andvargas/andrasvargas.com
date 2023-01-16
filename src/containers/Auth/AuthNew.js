import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "../../components/UI/Input/Input";
import * as actions from "../../store/actions/index";
import NavBarSmall from "../../components/Navigation/NavBarSmall";
import Helmet from "react-helmet";

const Auth = (props) => {
  const dispatch = useDispatch();
  console.log("this is the new Auth.js");
  const [formState, setFormState] = useState({
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
          name: "email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  });

  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  console.log(isAuthenticated);

  const loading = useSelector((state) => state.auth.loading);
  console.log(loading);

  const error = useSelector((state) => state.auth.error);
  console.log(error);

  const checkValidity = (value, rules) => {
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
  };

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...formState.controls,
      [controlName]: {
        ...formState.controls[controlName],
        value: event.target.value,
        valid: checkValidity(event.target.value, formState.controls[controlName].validation),
        touched: true,
      },
    };
    setFormState({ controls: updatedControls });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(actions.auth(formState.controls.email.value, formState.controls.password.value, formState.isSignup));
    // this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    console.log("this.props.isAuthenticated");
  };

  const formElementsArray = [];
  for (let key in formState.controls) {
    formElementsArray.push({
      id: key,
      config: formState.controls[key],
    });
  }
  console.log(formElementsArray);
  let form = (
    <form onSubmit={submitHandler}>
      <Helmet>
        <title>Register/Log In</title>
        <link rel="canonical" href={window.location.hostname + "/register"} />
      </Helmet>
      <h2>{formState.isSignup ? "Sign Up" : "Log In"}</h2>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button variant="contained" color="secondary" type="submit">
        {formState.isSignup ? "Register" : "Log In"}
      </Button>
    </form>
  );

  if (loading) {
    form = <CircularProgress />;
  }

  const switchAuthModeHandler = () => {
    setFormState((prevState) => {
      return { ...formState, isSignup: !prevState.isSignup };
    });
  };
  console.log(formState);

  let errorMessage = null;
  if (error) {
    errorMessage = <p className="error">{error}</p>;
  }

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <>
      <div className="App-header">
        {errorMessage}
        {form}
        <Button clicked={switchAuthModeHandler}>Switch to {formState.isSignup ? "Log In" : "Sign Up"}</Button>
      </div>
      <hr className="animated"></hr>
      <NavBarSmall />
    </>
  );
};

export default Auth;
