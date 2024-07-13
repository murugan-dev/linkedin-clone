import React from "react";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";
import Profile from "./Profile";
import "../css/Home.css";

function Home() {
  return (
    <>
      <Grid className="home-container">
        <Grid className="navbar-container">
          <NavBar />
        </Grid>
        <Grid sx={{
          padding: { xs: "0px 2%", lg: "0px 10%" },
          marginTop: "40px"
        }}
        container
        >
          <Grid lg={3}>
            <Profile />
          </Grid>
          <Grid lg={6}>Main</Grid>
          <Grid lg={3}>News</Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
