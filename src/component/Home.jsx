import React from "react";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";
import Profile from "./Profile";
import Main from "./Main"
import News from "./News";
import "../css/Home.css";

function Home() {
  return (
    <>
      <Grid className="home-container">
        <Grid className="navbar-container">
          <NavBar />
        </Grid>
        <Grid sx={{
          padding: { xs: "0px 3%", lg: "30px 10% 30px 10%" },
                 
        }}
        container
        spacing={5}
        >
          <Grid item lg={3}>
            <Profile />
          </Grid>
          <Grid item lg={6}>
            <Main/>
          </Grid>
          <Grid item lg={3}>
            <News/>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
