import React, { useEffect, useState } from "react";
import "../css/Sidebar.css";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import db from "../firebase";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{user}] = useStateValue()
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Razer Program</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title='Comment' />
      <SidebarOption Icon={Inbox} title='Mentions & reactions' />
      <SidebarOption Icon={Drafts} title='Saved items' />
      <SidebarOption Icon={BookmarkBorder} title='Channel browser' />
      <SidebarOption Icon={PeopleAlt} title='People & user groups' />
      <SidebarOption Icon={Apps} title='Apps' />
      <SidebarOption Icon={FileCopy} title='File browser' />
      <SidebarOption Icon={ExpandLess} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMore} title='Channels' />
      <hr />
      <SidebarOption Icon={Add} title='Add channel' addChannelOption />

      <SidebarOption title='youtube' />

      {/* Connect to db and list all channels */}
      {channels?.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id}/>
      ))}
    </div>
  );
}

export default Sidebar;
