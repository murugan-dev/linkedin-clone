import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { auth, database } from "../firebase/setup";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";

function Connections() {
  const [userList, setUserList] = useState([]);
  const { profileImg, designation, username } = useLocation().state;

  const sendRequest = async (userId) => {
    const userRef = doc(database, "Users", `${userId}`);
    const connectionRef = collection(userRef, "RequestIn");

    try {
      console.log(username, designation, profileImg);
      await addDoc(connectionRef, {
        username,
        designation,
        profileImg,
      });
      const filteredUser = userList.filter((user) => userId !== user.id);
      setUserList(filteredUser);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    const userRef = collection(database, "Users");
    try {
      const data = await getDocs(userRef);
      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((user) => auth.currentUser?.uid !== user.id);
      setUserList(filteredData);
    } catch (err) {
      console.log("You're getting an error");
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {userList.length === 0 && (
        <Typography sx={{ textAlign: "center", marginTop: "5rem" }}>
          No connection found
        </Typography>
      )}
      {userList.length !== 0 &&
        userList.map((user) => {
          return (
            <Paper key={user?.id} sx={{ margin: "1rem" }}>
              <List>
                <ListItem>
                  <Avatar src={user.photo_url} />
                  <ListItemText
                    primary={user.username}
                    secondary={user.designation}
                    sx={{ marginLeft: "0.5rem" }}
                  />
                  <Button
                    onClick={() => sendRequest(user?.id)}
                    variant="outlined"
                    size="small"
                    sx={{ color: "blue" }}
                  >
                    Connect
                  </Button>
                </ListItem>
              </List>
            </Paper>
          );
        })}
    </div>
  );
}

export default Connections;
