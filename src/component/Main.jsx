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
  IconButton,
} from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import ProfileImg from "../assets/Profile.png";
import Post from "../assets/simplePost.jpeg";
import "../css/Home.css";

function Main() {
  return (
    <div>
      <Card sx={{ mb: "13px" }}>
        <Stack direction="row" sx={{ padding: "10px" }} className="gap center">
          <CardMedia
            sx={{ height: "50px", width: "50px", borderRadius: "100%" }}
            image={ProfileImg}
            title="Profile image"
          />
          <TextField
            placeholder="Start a post, Writing with AI"
            fullWidth
            InputProps={{
              sx: {},
            }}
          />
        </Stack>
        <CardContent>
          <Grid container sx={{ padding: "0 10% 0 10%" }} className="center">
            <Grid
              item
              className="flex center"
              lg={4}
              sx={{
                "&:hover": {
                  height: "20px",
                  width: "80px",
                  backgroundColor: "#DDDDDD",
                  borderRadius: '10px'
                },
              }}
            >
              <PermMediaIcon sx={{ color: "#378FE9", fontSize: "22px" }} />
              <Typography variant="body1" component="h4">
                Media
              </Typography>
            </Grid>
            <Grid item className="flex center" lg={4}>
              <EventNoteIcon sx={{ color: "#C37D16", fontSize: "22px" }} />
              <Typography variant="body1" component="h4">
                Event
              </Typography>
            </Grid>
            <Grid item className="flex center" lg={4}>
              <ArticleIcon sx={{ color: "#E06847", fontSize: "22px" }} />
              <Typography variant="body1" component="h4">
                Article
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <hr />
      <Card sx={{ mt: "13px" }}>
        <CardHeader
          avatar={
            <CardMedia
              sx={{ height: "40px", width: "40px", borderRadius: "100%" }}
              image={ProfileImg}
              title="Profile image"
            />
          }
          action={
            <Stack direction="row" spacing={1}>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Stack>
          }
          title="Role"
          sx={{ padding: "10px" }}
        />
        <CardContent>
          <CardMedia image={Post} title="Your Post" sx={{ padding: "13%" }} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Main;
