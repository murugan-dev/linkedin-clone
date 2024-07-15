import React from "react";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import ProfileBackGround from "../assets/ProfileBackground.jpeg";
import ProfileImg from "../assets/Profile.png";
import "../css/Home.css";

function Profile() {
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
          sx={{ width: "100%", height: "100px" }}
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
          }}
          image={ProfileImg}
          title="Profile image"
        />
        <CardContent>
          <Stack direction="column" className="center">
            <Typography variant="p">Murugan K</Typography>
            <Typography variant="p">Role</Typography>
          </Stack>
          <hr />
          <Stack direction="column">
            <Stack direction="row" spacing={6}>
              <Typography variant="p">Profile Views</Typography>
              <Typography variant="p" component="h6">
                122
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="p">Connection</Typography>
              <Typography variant="p" component="h6">
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
