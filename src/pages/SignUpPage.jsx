import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// components
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Form, Field } from "react-final-form";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "Username is required.";
    }

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData(data);
      setShowMessage(true);

      form.restart();
    }, 2000);
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && (
        <small className="p-error xxs:text-xs">{meta.error}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-center">
      <Button
        label="OK"
        className="p-button-text"
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        className="xxs:w-[90%] xxs:h-[58%] sm:w-1/2 md:h-1/2"
      >
        <div className="flex items-center justify-center flex-col pt-6 px-3 gap-6">
          <i className="pi pi-check-circle" style={{ fontSize: "3rem" }}></i>
          <h5 className="xxs:text-sm xs:text-lg md:text-2xl lg:text-3xl">Registration Successful!</h5>
          <p className="xxs:text-xs md:text-base lg:text-xl">
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-br from-blue-500 to-cyan-300">
        <div className="card flex flex-col justify-between items-center text-white xxs:h-[95%] xxs:w-11/12 sm:h-2/3 sm:w-1/2 lg:h-1/2 xl:h-3/4 xxl:w-2/5">
          <h3 className="xxs:text-xl">SIGN UP</h3>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              username: "",
              name: "",
              email: "",
              password: "",
              accept: false,
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className="p-fluid flex flex-col gap-6"
              >
                <Field
                  name="username"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="username"
                          {...input}
                          className={
                            "xxs:h-9" +
                            classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })
                          }
                        />
                        <label
                          htmlFor="username"
                          className={
                            classNames({
                              "p-error": isFormFieldValid(meta),
                            }) + " xxs:text-xs"
                          }
                        >
                          Username*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="name"
                          {...input}
                          className={
                            classNames({
                              "p-invalid": isFormFieldValid(meta),
                            }) + " xxs:h-9"
                          }
                        />
                        <label
                          htmlFor="name"
                          className={
                            classNames({
                              "p-error": isFormFieldValid(meta),
                            }) + " xxs:text-xs"
                          }
                        >
                          Name*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          {...input}
                          className={
                            classNames({
                              "p-invalid": isFormFieldValid(meta),
                            }) + " xxs:h-9"
                          }
                        />
                        <label
                          htmlFor="email"
                          className={
                            classNames({
                              "p-error": isFormFieldValid(meta),
                            }) + " xxs:text-xs"
                          }
                        >
                          Email*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <Password
                          id="password"
                          {...input}
                          toggleMask
                          className={
                            classNames({
                              "p-invalid": isFormFieldValid(meta),
                            }) + " xxs:h-9"
                          }
                          header={passwordHeader}
                          footer={passwordFooter}
                        />
                        <label
                          htmlFor="password"
                          className={
                            classNames({
                              "p-error": isFormFieldValid(meta),
                            }) + " xxs:text-xs"
                          }
                        >
                          Password*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="accept"
                  type="checkbox"
                  render={({ input, meta }) => (
                    <div className="field-checkbox flex gap-2 items-center">
                      <Checkbox
                        inputId="accept"
                        {...input}
                        className={classNames({
                          "p-invalid": isFormFieldValid(meta),
                        })}
                      />
                      <label
                        htmlFor="accept"
                        className={
                          classNames({
                            "p-error": isFormFieldValid(meta),
                          }) + " xxs:text-sm"
                        }
                      >
                        I agree to the terms and conditions*
                      </label>
                    </div>
                  )}
                />

                <Button
                  label="Submit"
                  type="submit"
                  loading={loading}
                  className="xxs:h-9"
                />
              </form>
            )}
          />
          <NavLink to={"/signin"} className={"hover:underline xxs:text-sm"}>
            Sudah punya akun?
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
