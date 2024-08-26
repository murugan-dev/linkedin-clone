import React, {useState} from 'react';
import { forwardRef } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button, TextField } from '@mui/material';
import { setDoc, doc } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "50%"
  },
};

// Modal.setAppElement('#yourAppElement'); 

function Post(props, ref) {

   const [postText, setPostText] = useState('')
    
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'grey';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addPost = async () => {
    // const postDocument = doc(database, `Users-${auth.currentUser?.uid}`, `${auth.currentUser?.uid}`)
    const postRef = doc(database, 'Posts', `${Math.random()}`);

    try {
      await setDoc(postRef, {
        content: postText,
        userId: auth.currentUser.uid,
        timestamp: new Date().toISOString(),
      });
      closeModal();  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button ref={ref} onClick={openModal} style={{display: "none"}}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >


        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>What do you talk about??</h2>

        <TextField
        onChange={(e)=>setPostText(e.target.value)}
          id="outlined-multiline-static"
          label="Type here...."
          multiline
          rows={8}
          sx={{marginY: "20px", width: "100%", }}
        />
        <div style={{display: "flex", justifyContent: "space-between", padding: "20px 10px"}}>
        <Button variant="outlined" onClick={closeModal} size='small'>Cencel</Button>
        <Button variant="contained" onClick={addPost} size='small'>Post</Button>
        </div>
        
      </Modal>
    </div>
  );
}

export default forwardRef(Post);