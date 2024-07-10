import React from 'react'
import Grid from "@mui/material/Grid"
import Logo from "../assets/logo.png"

function Signin() {
  return (
    <div>
      <Grid container>
        <img src={Logo} alt="logo" />  
        <Grid item xs={6}>Developer


        </Grid>
        <Grid item xs={6}>Master Img</Grid>
      </Grid>
    </div>
  )
}

export default Signin
