import React, { useState, useEffect, useRef } from "react";
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
import Post from "./Post";
import UserDefaultProfile from "../assets/Profile.jpeg";
import "../css/Home.css";
import { getDocs, collection } from "firebase/firestore";
import { auth, database } from "../firebase/setup";
import PropTypes from "prop-types";

function Main({ data }) {
  const [profile, setProfile] = useState("");
  const [post, setPost] = useState([]);

  const postRef = useRef(null);;


  const getPost = async () => {

    const postRef = collection(database, "Posts"); // ← Correct collection
    try {
      const data = await getDocs(postRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPost(filterData);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    setProfile(auth.currentUser?.photoURL || UserDefaultProfile);
  }, []);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Card sx={{ mb: "13px" }}>
        <Stack direction="row" sx={{ padding: "10px" }} className="gap center">
          <CardMedia
            sx={{
              height: "50px",
              width: "50px",
              borderRadius: "100%",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            image={profile}
            title="Profile image"
          />
          <TextField
            placeholder="Start a post, Writing with AI"
            fullWidth
            InputProps={{
              sx: {},
            }}
            onClick={() => postRef.current?.click()}
          />
          <Post ref={postRef} />
        </Stack>
        <CardContent>
          <Grid
            container
            sx={{ padding: "0 10% 0 10%", transition: "2s ease-in-out" }}
            className="center"
          >
            <Grid
              item
              className="flex center"
              lg={4}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <PermMediaIcon sx={{ color: "#378FE9", fontSize: "22px" }} />
              <Typography variant="body1" component="h4">
                Media
              </Typography>
            </Grid>
            <Grid
              item
              className="flex center"
              lg={4}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <EventNoteIcon sx={{ color: "#C37D16", fontSize: "22px" }} />
              <Typography variant="body1" component="h4">
                Event
              </Typography>
            </Grid>
            <Grid
              item
              className="flex center"
              lg={4}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <ArticleIcon sx={{ color: "#E06847", fontSize: "22px" }} />
              <Typography variant="body1" component="h4">
                Article
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {post.map((posts, idx) => (
        <Card sx={{ mt: "13px", padding: "0.4rem" }} key={posts.id || idx}>
          <CardHeader
            avatar={
              <CardMedia
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "100%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                image={profile || UserDefaultProfile}
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
            title={data.username}
            sx={{ padding: "10px" }}
          />
          <Typography
            sx={{
              paddingLeft: "1.5rem",
            }}
          >
            {posts.content}
          </Typography>
          <CardContent>
            {/* <CardMedia
              component="img"
              image={UserPost}
              title="Your Post"
              sx={{ padding: "13%" }}
            /> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default Main;
