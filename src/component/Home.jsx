import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";
import Profile from "./Profile";
import Main from "./Main";
import News from "./News";
import "../css/Home.css";

import { auth, database } from "../firebase/setup";
import { doc, getDoc } from "firebase/firestore";

function Home() {
  const [userDetail, setUserDetail] = useState({});

  const fetchProfile = () => {
    setTimeout(async () => {
      if (!auth.currentUser) {
        console.log("User is not authenticated");
        return;
      }

      try {
        const userDoc = doc(database, `Users-${auth.currentUser?.uid}`, auth.currentUser?.uid);
        const data = await getDoc(userDoc);
        if (data.exists()) {
          setUserDetail(data.data());
          // setProfile(auth.currentUser.photoURL)
          // console.log("user Detail");

          // console.log(data.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log("Error fetching document:", err);
      }
    }, 1000);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <Grid className="home-container">
        <Grid className="navbar-container">
          <NavBar data={userDetail}/>
        </Grid>
        <Grid
          sx={{
            padding: { xs: "0px 3%", lg: "30px 10% 30px 10%" },
          }}
          container
          spacing={5}
        >
          <Grid item lg={3}>
            <Profile data={userDetail} />
          </Grid>
          <Grid item lg={6}>
            <Main data={userDetail}/>
          </Grid>
          <Grid item lg={3}>
            <News />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
