import { Grid, TextField, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/Homelogo.png";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ px: { xs: '5px', lg: '10px' }, alignItems: { xs: 'flex-end', lg: 'center' } }}>
        <Grid item xs={12} lg={3} sx={{ display: "flex", alignItems: "center", position: "sticky", top: { xs: '0px', lg: 'auto' } }}>
          <img src={Logo} alt="logo" style={{ height: "50px", width: "50px", marginRight: "10px" }} />
          <TextField variant="outlined" placeholder="Search" sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} lg={9} sx={{ display: "flex", justifyContent: "flex-end", alignItems: { xs: 'flex-end', lg: 'center' }, position: "sticky", bottom: { xs: '0px', lg: 'auto' } }}>
          <Stack direction="row" spacing={2}>
            <HomeIcon />
            <PeopleAltIcon /> 
            <MessageIcon />
            <AccountCircleIcon />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default NavBar;
