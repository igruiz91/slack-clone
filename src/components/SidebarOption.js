import React from "react";
import { useHistory } from "react-router-dom";
import "../css/SidebarOption.css";
import db from "../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory()
  const selectChanel = () => {
    if(id){
      history.push(`/room/${id}`)
    }else{
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Enter Chanel Name')
    if(channelName){
      db.collection('rooms').add({
        name: channelName
      })
    }
  };

  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChanel}>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebarOption__channel'>
          <span className='sidebarOption__hash'># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
