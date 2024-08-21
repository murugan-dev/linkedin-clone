import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import ProfileBackGround from "../assets/ProfileBackground.jpeg";
import ProfileImg from "../assets/Profile.png";
import "../css/Home.css";

import {auth, database} from "../firebase/setup"
import {doc, getDoc } from "firebase/firestore"




function Profile() {

  const fetchProfile = () =>{
    setTimeout(async()=>{
      try{
        const userDoc = doc(database, "Users", `${auth.currentUser?.uid}`);
        const data = await getDoc(userDoc);
        console.log(data)
  
      }catch(err){
        console.log(err)
      }
    }, 1000)
     
  }

  useEffect(()=>{
    fetchProfile();
  }, [])
  
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            width: "100%",
            height: "100px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          image={ProfileBackGround}
          title="profile background image"
        />
        <CardMedia
          sx={{
            height: "120px",
            width: "120px",
            zIndex: 10,
            marginTop: "-60px",
            borderRadius: "100%",
            objectFit: "cover",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          image={ProfileImg}
          title="Profile image"
        />
        <CardContent>
          <Stack direction="column" className="center gap" sx={{ mb: 1 }}>
            <Typography variant="p" component="h2">
              Murugan K
            </Typography>
            <Typography variant="p">Role</Typography>
          </Stack>
          <hr />
          <Stack direction="column" className="gap" sx={{ mt: 1 }}>
            <Stack direction="row" className="space-between">
              <Typography variant="p">Profile Views</Typography>
              <Typography variant="p" component="h4" sx={{ color: "#0174B3" }}>
                122
              </Typography>
            </Stack>
            <Stack direction="row" className="space-between gap">
              <Typography variant="p">Connection</Typography>
              <Typography variant="p" component="h4" sx={{ color: "#0174B3" }}>
                1080
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
