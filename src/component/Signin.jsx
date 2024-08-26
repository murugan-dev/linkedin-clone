import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, database } from "../firebase/setup"
import { doc, setDoc } from "firebase/firestore"
import {ToastContainer , toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../assets/logo.png";
import SigninImg from "../assets/signin.jpg";
import "../css/signin.css";

import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate = useNavigate()

  const [userName, setUserName] = useState('');
  const [designation, setDesignation] = useState('');

  const addUser = async () =>{
    const userRef = doc(database, `Users-${auth.currentUser?.uid}`, auth.currentUser?.uid)
    try{
      await setDoc(userRef, {
        username : userName,
        email: auth.currentUser?.email,
        designation: designation,
        photo_url: auth.currentUser?.photoURL
      
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
      navigate("/home")
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
            sx={{ width: "100%", mt: 2, mb: 1}}
            onChange= {(e)=>setUserName(e.target.value)}
          />
          <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Designation
          </label>
          <br />
          <TextField
            variant="outlined"
            label="Designation"
            sx={{ width: "100%", mt: 2 }}
            onChange= {(e)=>setDesignation(e.target.value)}
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
