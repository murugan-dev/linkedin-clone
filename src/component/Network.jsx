import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase/setup";
import { Link } from "react-router-dom";

export default function Network() {
  const [connectionList, setConnectionList] = useState([]);

  const removeConnections = async (id) => {
    const currentUserId = auth.currentUser?.uid;
    if (!currentUserId) {
      console.warn("No user is logged in");
      return;
    }

    const connectionRef = doc(
      database,
      "Users",
      currentUserId,
      "ConnectionsList",
      id
    );
    try {
      await deleteDoc(connectionRef);
      const filteredConnectionList = connectionList.filter(
        (user) => user?.id !== id
      );
      setConnectionList(filteredConnectionList);
    } catch (err) {
      console.error(err);
    }
  };

  const getConnectionList = async () => {
    const currentUserId = auth.currentUser?.uid;
    if (!currentUserId) {
      console.warn("No user is logged in");
      return;
    }

    const connectionRef = collection(
      database,
      "Users",
      currentUserId,
      "ConnectionsList"
    );



    try {
      const userRef = await getDocs(connectionRef)

      
      
      const filtered = userRef.docs.map((doc) => ({
        ...doc.data(),
        id: doc?.id,
      })
    );
      setConnectionList(filtered);
    } catch (err) {
      console.error("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    getConnectionList();
  }, []);

  return (
    <div>
      {connectionList.length === 0 && (
        <Typography sx={{ textAlign: "center", marginTop: "5rem" }}>
          No Connections found
        </Typography>
      )}
      {connectionList.length !== 0 &&
        connectionList?.map((user) => {
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

                  <Link
                    to={`/messages/${user?.id}`}
                    state={{
                      username: user.username,
                      id: user.id,
                      profile_image: user.profile_image,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "blue", mr: 1 }}
                      style={{ marginLeft: "-4rem" }}
                    >
                      Message
                    </Button>
                  </Link>

                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => removeConnections(user?.id)}
                  >
                    Remove
                  </Button>
                </ListItem>
              </List>
            </Paper>
          );
        })}
    </div>
  );
}
