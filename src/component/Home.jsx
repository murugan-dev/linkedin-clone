import React from 'react'
import NavBar from "./NavBar"
import { Grid } from "@mui/material"
import '../css/Home.css'

function Home() {
  return (
    <>   
    <Grid className='home-container'>
        <Grid className='navbar-container' >
          <NavBar />
        </Grid>
    </Grid>
    </>
    
  )
}

export default Home
