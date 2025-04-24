import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BKLOGO from '../assets/bklogo.webp';
import { green, grey } from '@mui/material/colors';
import ProfilePopup from '../components/ProfilePopup';
import { useNavigate } from "react-router-dom";

// Create a custom styled Paper for the Menu
const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: green[50],
    borderRadius: 20 // Change the background color
  },
}));

export default function NavBar({ setOpenSidebar, logOut }) {


  return (
    <Box sx={{ flexGrow: 1 }}>
      
    </Box>
  );
}
