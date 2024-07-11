import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, database } from "../firebase/setup"
import {addDoc, collection } from "firebase/firestore"
import {ToastContainer , toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../assets/logo.png";
import SigninImg from "../assets/signin.jpg";
import "../css/signin.css";

function Signin() {

  const [userName, setUserName] = useState('');

  const addUser = async () =>{
    const userRef = collection(database, "Users")
    try{
      await addDoc(userRef, {
        username : userName,
      });
    }catch(err){
      console.log(err)
    }  
} 

  const signinWithGoogle = async () => {
    !userName && toast.warn("please enter the the User name")
    try{
      userName && await signInWithPopup(auth, googleProvider)
      userName && addUser()
    }
    catch(err){
      console.log(err)
    }

  }

  return (
    <div className="signin-container">
      <Stack>
        <img src={Logo} alt="logo" className="logo" />
      </Stack>

      <Grid container sx={{ mt: 2, overflow: "hidden" }}>
        <Grid item xs={12} lg={6} sx={{ mt: 2, width: "100%",}}>
          <ToastContainer autoClose={2000} position='top-right'/>
          <Stack>
            <Typography
              sx={{ mt: 2, mb: 2, color: "brown", fontSize: { xs: "29px", lg: "40px" } }}
              variant="p"
            >
              Find Your Dream Job Through This Linkedin Clone
            </Typography>
          </Stack>
          <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Enter Email or username
          </label>
          <br />
          <TextField
            variant="outlined"
            label="Email or username"
            sx={{ width: "100%", mt: 2 }}
            onChange= {(e)=>setUserName(e.target.value)}
          />
          <Button onClick = { signinWithGoogle }
            variant="contained"
            sx={{ mt: 2, borderRadius: 10, width: "100%" }}
          >
            Sign in
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", display: { xs: 'none', lg: "block", } }}
        >
          <img
            src={SigninImg}
            alt="find job"
            style={{
              height: "90%",
              width: "90%",
              objectFit: "cover",
              marginTop: '-0px',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
