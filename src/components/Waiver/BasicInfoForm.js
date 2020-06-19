import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import states from "../../static/states";


// Destructure props
const BasicInfoForm = ({
  handleNext,
  handleChange,
  values: { firstName, lastName, email, gender, dob, address, city, state, phone, postalCode },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty =
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    gender.length > 0 &&
    address.length > 0 &&
    city.length > 0 &&
    state.length > 0 &&
    postalCode.length > 0 &&
    dob.length > 0 

    const listOfStates = (Object.keys(states).map( (value, key) => {
        return (
            <MenuItem value={value} key={key}>{`${states[value]}`}</MenuItem>
        )
    }));

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            defaultValue={firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            error={filedError.firstName !== ""}
            helperText={
              filedError.firstName !== "" ? `${filedError.firstName}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select value={gender} onChange={handleChange("gender")}>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            defaultValue={address}
            onChange={handleChange("address")}
            margin="normal"
            error={filedError.address !== ""}
            helperText={filedError.address !== "" ? `${filedError.address}` : ""}
            required
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="City"
            name="city"
            defaultValue={city}
            onChange={handleChange("city")}
            margin="normal"
            error={filedError.city !== ""}
            helperText={filedError.city !== "" ? `${filedError.city}` : ""}
            required
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="state">State</InputLabel>
            <Select value={state} onChange={handleChange("state")}>
              {listOfStates}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Postal Code"
            name="postalCode"
            defaultValue={city}
            onChange={handleChange("postalCode")}
            margin="normal"
            error={filedError.postalCode !== ""}
            helperText={filedError.postalCode !== "" ? `${filedError.postalCode}` : ""}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="birthday"
            type="date"
            defaultValue={dob}
            onChange={handleChange("dob")}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            defaultValue={phone}
            onChange={handleChange("phone")}
            margin="normal"
            error={filedError.phone !== ""}
            helperText={filedError.phone !== "" ? `${filedError.phone}` : ""}
          />
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default BasicInfoForm;
