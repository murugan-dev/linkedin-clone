import {
  Avatar,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { auth, database } from "../firebase/setup";

function Message() {
  const [message, setMessage] = useState("");
  const [messageData, setMessageData] = useState([]);
  const [getCurrentUser, setGetCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  const { receiverId } = useParams();
  const receiver = useLocation().state;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserId(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const chatId = useMemo(() => {
    return currentUserId && receiverId
      ? [currentUserId, receiverId].sort().join("-")
      : null;
  }, [currentUserId, receiverId]);

  const messagesRef = useMemo(() => {
    return chatId ? collection(database, "Messages", chatId, "messages") : null;
  }, [chatId]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!currentUserId) return;

      try {
        const userRef = doc(database, "Users", currentUserId);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setGetCurrentUser(docSnap.data());
        } else {
          console.warn("No current user profile found");
        }
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };

    fetchProfile();
  }, [currentUserId]);

  // ✅ Realtime message listener (once chatId is ready)
  useEffect(() => {
    if (!messagesRef) return;

    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessageData(msgs);
    });

    return () => unsubscribe();
  }, [messagesRef]);

  // ✅ Send a message to Firestore
  const sendMessage = async () => {
    if (!message.trim() || !getCurrentUser || !messagesRef) return;

    try {
      await addDoc(messagesRef, {
        message,
        senderId: currentUserId,
        username: getCurrentUser.username || "Unknown",
        profile_image: getCurrentUser.photo_url || "",
        timestamp: serverTimestamp(),
      });
      setMessage("");
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  return (
    <div style={{ padding: "36px" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Chat with {receiver?.username || "User"}
      </Typography>

      <div>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          label="Type your message"
          size="small"
        />
        <Button sx={{ ml: "30px" }} variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </div>

      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column" }}>
        {messageData.map((msg) => {
          const isSender = msg.senderId === currentUserId;
          return (
            <div
              key={msg.id}
              style={{
                marginBottom: "2rem",
                alignSelf: isSender ? "flex-end" : "flex-start",
                backgroundColor: isSender ? "#E3F2FD" : "#F1F1F1",
                borderRadius: "8px",
                padding: "10px",
                maxWidth: "70%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Avatar src={msg.profile_image} />
                <Typography sx={{ fontWeight: "bold" }}>{msg.username}</Typography>
              </div>
              <Typography sx={{ margin: "0.5rem 0 0 3rem" }}>
                {msg.message}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
