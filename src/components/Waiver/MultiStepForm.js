import React, { useState } from "react"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import BasicInfoForm from "./BasicInfoForm"
import VisitorAgreement from "./VisitorAgreement"
import Confirm from "./Confirm"
import Success from "./Success"

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/)
const phoneRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/)
const labels = ["Basic Info", "Visitor Agreement", "Confirmation"]

const MultiStepForm = () => {
  const [steps, setSteps] = useState(0)
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phone: ""
  })

  const [filedError, setFieldError] = useState({
    ...fields
  })

  const [isError, setIsError] = useState(false)

  const handleNext = () => setSteps(steps + 1)
  const handleBack = () => setSteps(steps - 1)
  const handleChange = input => ({ target: { value } }) => {
    setFields({
      ...fields,
      [input]: value
    })

    const formErrors = { ...filedError }
    const lengthValidate = value.length > 0 && value.length < 3

    switch (input) {
      case "firstName":
        formErrors.firstName = lengthValidate
          ? "Minimum 3 characters required"
          : ""
        break
      case "lastName":
        formErrors.lastName = lengthValidate
          ? "Minimum 3 characters required"
          : ""
        break
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid email address"
        break
      case "phone":
        formErrors.phone = phoneRegex.test(value)
          ? ""
          : "Please enter a valid phone number. i.e: xxx-xxx-xxxx"
        break
      case "city":
        formErrors.city = lengthValidate ? "Minimum 3 characters required" : ""
        break
      default:
        break
    }

    // set error hook
    Object.values(formErrors).forEach(error =>
      error.length > 0 ? setIsError(true) : setIsError(false)
    )
    // set errors hook
    setFieldError({
      ...formErrors
    })
  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <BasicInfoForm
            handleNext={handleNext}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      case 1:
        return (
          <VisitorAgreement
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      case 2:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={fields}
          />
        )
      default:
        break
    }
  }

  // Handle components
  return (
    <>
      {steps === labels.length ? (
        <Success />
      ) : (
        <>
          <Stepper
            activeStep={steps}
            style={{ paddingTop: 30, paddingBottom: 50 }}
            alternativeLabel
          >
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(steps)}
        </>
      )}
    </>
  )
}

export default MultiStepForm;
