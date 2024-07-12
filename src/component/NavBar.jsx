import { Grid, TextField, Stack, Box, Button } from "@mui/material";
import React, { useState } from "react";
import Logo from "../assets/Homelogo.png";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../css/Home.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Grid
        container
        sx={{
          padding: { xs: "0px 5%", lg: "0px 10%" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: "0px",
          }}
        >
          <div className="flex">
            <Box
              sx={{
                height: { xs: "40px", lg: "50px" },
                width: { xs: "40px", lg: "50px" },
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: { xs: "70%", lg: "90%" } }}>
              <TextField
                variant="outlined"
                placeholder="Search"
                sx={{ width: { xs: "120%", lg: "150%" } }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                InputProps={{
                  sx: {
                    height: { xs: "40px", lg: "50px" },
                    padding: "10px 28px",
                  },
                }}
              />
              <SearchIcon
                sx={{
                  position: "absolute",
                  right: "84%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  color: isFocused ? "blue" : "grey",
                }}
              />
            </Box>
          </div>
          <Grid
            sx={{
              display: { xs: isMenuOpen ? "none" : "flex", lg: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuIcon onClick={toggleMenu} />
          </Grid>
          <Grid
            sx={{ display: { xs: isMenuOpen ? "block" : "none", lg: "none" } }}
          >
            <CloseIcon onClick={toggleMenu} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={9}
          sx={{
            justifyContent: "flex-end",
            alignItems: { xs: "flex-end", lg: "center" },
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Stack direction="row" spacing={1}>
            <Button sx={{ color: "#000", "&:hover": { color: "#0174B3", } }}>
              <HomeIcon style={{ fontSize: 30 }} />
            </Button>
            <Button sx={{ color: "#000", "&:hover": { color: "#0174B3" } }}>
              <PeopleAltIcon style={{ fontSize: 30 }} />
            </Button>
            <Button sx={{ color: "#000", "&:hover": { color: "#0174B3" } }}>
              <MessageIcon style={{ fontSize: 30 }} />
            </Button>
            <Button sx={{ color: "#000", "&:hover": { color: "#0174B3" } }}>
              <AccountCircleIcon style={{ fontSize: 30 }} />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
