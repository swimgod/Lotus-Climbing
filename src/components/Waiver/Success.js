import React from "react"
import Typography from "@material-ui/core/Typography"

const Success = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Thank You!
      </Typography>
      <Typography component="p" align="center" style={{ marginTop: 40 }}>
        You will receive an email with a copy of your visitor agreement.
      </Typography>
    </>
  )
}

export default Success;
