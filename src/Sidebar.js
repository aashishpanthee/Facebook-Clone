import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";


function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://lh3.googleusercontent.com/a-/ACNPEu96naG8hDCFUnz6GbksRm2enO2jqWvgfBQB_kBynw=s96-c-rg-br100'
        title='Aashish Panthee'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow
        Icon={EmojiFlagsIcon}
        title='Pages'
      />
      <SidebarRow
        Icon={PeopleIcon}
        title='Friends'
      />
      <SidebarRow
        Icon={ChatIcon}
        title='Messenger'
      />
      <SidebarRow
        Icon={StorefrontIcon}
        title='Marketplace'
      />
      <SidebarRow
        Icon={VideoLibraryIcon}
        title='Video'
      />
      <SidebarRow
        Icon={ExpandMoreOutlinedIcon}
        title='Marketplace'
      />
    </div>
  );
}

export default Sidebar;
