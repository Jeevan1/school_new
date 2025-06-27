import { useState } from "react";
import InputField from "./InputField";
import apiService from "../../api_service";

const Form = () => {
  const [value, setValue] = useState({
    full_name: "",
    phone_no: "",
    email: "",
    description: "",
  });

  const [errorStatus, setErrorStatus] = useState({
    allEmpty: true,
    invalidEmail: false,
    invalidNumber: false,
    backendError: false,
    success: false,
  });

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]+$/;

    const isEmpty =
      !value.full_name.trim() ||
      !value.phone_no.trim() ||
      !value.email.trim() ||
      !value.description.trim();
    const isInvalidEmail = !emailRegex.test(value.email.trim());
    const isInvalidNumber = !phoneRegex.test(value.phone_no.trim());

    setErrorStatus({
      allEmpty: isEmpty,
      invalidEmail: isInvalidEmail,
      invalidNumber: isInvalidNumber,
      backendError: false,
      success: false,
    });

    return !isEmpty && !isInvalidEmail && !isInvalidNumber;
  };

  const handleEnquiryForm = async (e) => {
    e.preventDefault();
    setShowMessage(true);

    // Perform validation and prevent submission if validation fails
    if (!validateForm()) return;

    try {
      console.log("value", value);

      setLoading(true);
      const res = await apiService.post("/contactus/", value, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res) {
        setErrorStatus((prev) => ({
          ...prev,
          success: true,
          backendError: false,
        }));
        setValue({
          full_name: "",
          email: "",
          phone_no: "",
          description: "",
        });
      }
    } catch (err) {
      setErrorStatus((prev) => ({
        ...prev,
        backendError: true,
        success: false,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setValue({ ...value, [field]: e.target.value });
  };

  return (
    <div className="enquiry">
      <form className="enquiry__form " onSubmit={handleEnquiryForm}>
        <div className="row">
          <div className="col-12">
            <InputField
              fieldType="input"
              inputType="text"
              label="Full Name"
              onChange={handleChange("full_name")}
              value={value.full_name}
              placeholder="Eg. Ganesh Kunwar"
            />
          </div>
          <div className="col-md-6 col-12">
            <InputField
              fieldType="input"
              inputType="email"
              label="Email Address"
              onChange={handleChange("email")}
              value={value.email}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="col-md-6 col-12">
            <InputField
              fieldType="input"
              inputType="number"
              label="Phone Number"
              onChange={handleChange("phone_no")}
              value={value.phone_no}
              placeholder="98XXXXXXXX"
            />
          </div>
          <div className="col-12">
            <InputField
              fieldType="textarea"
              rows={6}
              cols={5}
              label="Subject"
              onChange={handleChange("description")}
              value={value.description}
            />
          </div>
          <div className="col-12">
            <InputField fieldType="input" inputType="submit" value="Submit" />
          </div>
          <div className="col-12">
            {showMessage && (
              <div
                className={`error__message alert ${
                  errorStatus.success ? "alert-success" : "alert-warning"
                }`}
              >
                {/* Validation Errors */}
                <p className={errorStatus.allEmpty ? "d-block" : "d-none"}>
                  Input Fields Cannot be Empty
                </p>
                <p className={errorStatus.invalidEmail ? "d-block" : "d-none"}>
                  Please Check Your Email
                </p>
                <p className={errorStatus.invalidNumber ? "d-block" : "d-none"}>
                  Please Check Your Phone Number
                </p>

                {/* Loading Spinner */}
                {loading && (
                  <p className="d-block success">
                    <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                  </p>
                )}

                {/* Success Message */}
                <p
                  className={errorStatus.success ? "d-block success" : "d-none"}
                >
                  Response Submitted Successfully
                </p>

                {/* Backend Error Message */}
                <p
                  className={
                    errorStatus.backendError ? "d-block error" : "d-none"
                  }
                >
                  Error While Submitting Response
                </p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
