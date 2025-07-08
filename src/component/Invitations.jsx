import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase/setup";

function Invitations() {
  const [invitationsList, setinvitationsList] = useState([]);
  const showrequest = async () => {
    const requestRef = doc(database, "Users", `${auth.currentUser?.uid}`);
    const requestInRef = collection(requestRef, "RequestIn");
    try {
      const data = await getDocs(requestInRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc?.id,
      }));
      setinvitationsList(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteReq = async (id) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.uid}`);
    const delDocument = doc(userDoc, "RequestIn", `${id}`);
    try {
      await deleteDoc(delDocument);
      const filterUser = invitationsList.filter(
        (eachUser) => eachUser?.id !== id
      );
      setinvitationsList(filterUser);
    } catch (err) {
      console.error(err);
    }
  };

  const acceptReq = async (user) => {
    const acceptDoc = doc(database, "Users", `${auth.currentUser?.uid}`);
    const connectionDoc = doc(acceptDoc, "ConnectionsList", `${user.id}`);
    try {
      await setDoc(connectionDoc, {
        designation: user.designation,
        username: user.username,
        profile_image: user.profileImg,
        id: user.id,
      });
      const filterUser = invitationsList.filter(
        (eachUser) => eachUser?.id !== user?.id
      );
      setinvitationsList(filterUser);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    showrequest();
  }, []);


  return (
    <div>
      {invitationsList.length === 0 && (
        <Typography sx={{ textAlign: "center", marginTop: "5rem" }}>
          No Invitation found
        </Typography>
      )}
      {invitationsList.length !== 0 &&
        invitationsList?.map((user) => {
          return (
            <Paper key={user?.id} sx={{ margin: "1rem" }}>
              <List>
                <ListItem>
                  <Avatar src={user?.profileImg} />
                  <ListItemText
                    primary={user?.username || "No Name"}
                    secondary={user?.designation || "No destination"}
                    sx={{ marginLeft: "0.5rem" }}
                  />
                  <Button
                    onClick={() => deleteReq(user?.id)}
                    variant="outlined"
                    size="small"
                    sx={{ color: "blue", mr: 1 }}
                    style={{ marginLeft: "-4rem" }}
                  >
                    Ingore
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => acceptReq(user)}
                  >
                    Acccept
                  </Button>
                </ListItem>
              </List>
            </Paper>
          );
        })}
    </div>
  );
}

export default Invitations;
