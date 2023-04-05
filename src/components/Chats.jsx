import React, { useState, useEffect, useContext } from 'react';
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
export const Chats = () => {

 const[chats,setChats]=useState([])
 const {currentUser}=useContext(AuthContext)

 useEffect(()=>{
  const getChats=()=>{
    const unsub=onSnapshot(doc(db,"userChats",currentUser.uid),doc=>{
      setChats(doc.data())
    });
    return()=>{
      unsub();
    };
  };

  currentUser.uid && getChats()
 },[currentUser.uid]);

  return (
    <div className="Chats">
      {Object.entries(chats)?.map(chat=>(
        <div className="userChat" key={chat[0]}>
          <img 
            src={chat[1].userInfo.photoURL} alt=""/>
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats;
