import React from "react"
import Button from "@material-ui/core/Button"
import MultiPage from "./MultiPage";


// Destructure props
const VisitorAgreement = ({
  handleNext,
  handleBack,
  handleChange,
  filedError,
  isError
}) => {
  return (
    <>
      <MultiPage/>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default VisitorAgreement;
