import { useState } from "react";
import { NavLink } from "react-router-dom";

// components
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "Username is required.";
    }

    if (!data.password) {
      errors.password = "Password is required.";
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

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-br from-blue-500 to-cyan-300">
      <div className="card flex flex-col justify-between items-center text-white xxs:h-3/5 xxs:w-11/12 sm:h-2/3 sm:w-1/2 lg:h-1/2 xl:h-3/4 xxl:w-2/5">
        <h3 className="xxs:text-xl md:text-3xl lg:text-4xl">SIGN IN</h3>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            username: "",
            password: "",
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
                name="password"
                render={({ input, meta }) => (
                  <div className="field">
                    <span className="p-float-label">
                      <Password
                        id="password"
                        {...input}
                        toggleMask
                        className={
                          classNames({
                            "p-invalid": isFormFieldValid(meta),
                          }) + " xxs:h-9"
                        }
                        feedback={false}
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

              <Button
                label="Submit"
                type="submit"
                loading={loading}
                className="xxs:h-9"
              />
            </form>
          )}
        />
        <NavLink to={"/signup"} className={"hover:underline xxs:text-sm"}>
          Belum punya akun?
        </NavLink>
      </div>
    </div>
  );
};

export default SignInPage;
