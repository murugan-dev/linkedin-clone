import React from "react";
import {
  Grid,
  Stack,
  Card,
  CardMedia,
  CardContent,
  TextField,
  CardHeader,
  Typography,
} from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import ProfileImg from "../assets/Profile.png";
import Post from "../assets/simplePost.jpeg";
import "../css/Home.css"

function Main() {
  return (
    <div>
      <Card elevation={4}>
        <Stack direction="row" sx={{ padding: "10px" }}>
          <CardMedia
            sx={{ height: "40px", width: "40px", borderRadius: "100%" }}
            image={ProfileImg}
            title="Profile image"
          />
          <TextField
            placeholder="Start a post, Writing with AI"
            sx={{ borderRadius: "100%", width: "100%" }}
          ></TextField>
        </Stack>
        <CardContent>
          <Grid container sx={{ padding: "10%" }}>
            <Grid item className="flex" lg={4} spacing={5}>
              <PermMediaIcon sx={{ color: "#378FE9" }} />
              <Typography variant="h5">Media</Typography>
            </Grid>
            <Grid item className="flex" lg={4} spacing={5}>
              <EventNoteIcon sx={{ color: "#C37D16" }} />
              <Typography variant="h5">Event</Typography>
            </Grid>
            <Grid item className="flex" lg={4} spacing={5}>
              <ArticleIcon sx={{ color: "#E06847" }} />
              <Typography variant="h5">Article</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <hr />
      <Card>
        <CardHeader sx={{ padding: "10px" }}>
          <Stack direction="row">
            <CardMedia
              sx={{ height: "40px", width: "40px", borderRadius: "100%" }}
              image={ProfileImg}
              title="Profile image"
            />
            <Typography variant="p">Role</Typography>
          </Stack>
          <Stack>
            <MoreHorizIcon />
            <CloseIcon />
          </Stack>
        </CardHeader>
        <CardContent>
          <CardMedia
            image={Post}
            title="Your Post"
            sx={{ padding: "13%" }}
          ></CardMedia>
        </CardContent>
      </Card>
    </div>
  );
}

export default Main;
