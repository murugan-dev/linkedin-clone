import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import ProfileBackGround from "../assets/ProfileBackground.jpeg";
// import ProfileImg from "../assets/Profile.png";
import "../css/Home.css";

import { auth } from "../firebase/setup";

function Profile({ data }) {
  const [profilePhoto, setprofilePhoto] = useState("");

  useEffect(() => {
    setTimeout(async () => {
      await setprofilePhoto(auth.currentUser.photoURL);
    }, 2000);
  });

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
          image={profilePhoto}
          title="Profile image"
        />
        <CardContent>
          <Stack direction="column" className="center gap" sx={{ mb: 1 }}>
            <Typography variant="p" component="h2">
              {data.username}
            </Typography>
            <Typography variant="p">{data.designation}</Typography>
          </Stack>
          <hr />
          <Stack direction="column" className="gap" sx={{ mt: 1 }}>
            <Stack direction="row" className="space-between">
              <Typography variant="p">Profile Views</Typography>
              <Typography variant="p" component="h4" sx={{ color: "#0174B3" }}>
                122
              </Typography>
            </Stack>
            <Stack direction="row" className="space-betaween gap">
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
