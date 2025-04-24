import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Assessment';
import AuditIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { green, grey } from '@mui/material/colors';
import BKLOGO from '../assets/react.svg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { NavLink, useNavigate } from "react-router-dom";
import { getMenuDetails } from '../utils/loginUtil';


export default function SideBar({ open, setOpen }) {
  const [expandedPanel, setExpandedPanel] = useState(false); // To control which accordion is expanded
  const [auditMenu, setAuditMenu] = useState([]); // To control which accordion is expanded
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    let auditMenuList = getMenuDetails()
    setAuditMenu(auditMenuList)
  }, [])

  const MenuAccordian = (menuObject) => {
    return (
      <Accordion
        square
        disableGutters 
        expanded={menuObject.menuName === "Dashboard" ? false : expandedPanel === menuObject.id} // Expand the current one based on the `id`
        onChange={() => {
          setExpandedPanel(expandedPanel === menuObject.id ? false : menuObject.id); // Toggle collapse/expand
        }}
        onClick = {(e)=>{
            e.stopPropagation()
            if(menuObject.menuName === "Dashboard"){
              setOpen(false);
              navigate('/dashboard')
             
            }
        }}
        key={menuObject.id}
        sx={{
          backgroundColor: 'transparent', // Transparent background
          boxShadow: 'none', // Remove shadow
          '&:before': {
            display: 'none', // Remove the default divider line
          },
          '&.Mui-expanded': {
            margin: 0,  // Remove extra margin when expanded
          }
        }}
      >
        <AccordionSummary
          sx={{
            color: "primary.darkest"
          }}
          expandIcon={menuObject.subMenuArr.length > 0 ? <ExpandMoreIcon /> : null} // Only show expand icon if submenu exists
          aria-controls="panel-content"
          id={`panel-header-${menuObject.id}`}
        >
          <Box sx={{marginRight:"0.2rem"}}>{menuObject.icon}</Box> <Typography color= "primary.darkest" component="span" fontWeight="500">{menuObject.menuName}</Typography>
        </AccordionSummary>
        {menuObject.subMenuArr.length > 0 && (
          <AccordionDetails
            sx={{
             background:  `linear-gradient( to right, ${green[50]}, ${green[300]})` 
            }}
          >
            <List>
              {menuObject.subMenuArr.map((submenu) => (
                <ListItem key={submenu.id} disablePadding>
                  <NavLink to={submenu.route} style={{textDecoration: 'none', color: 'black'}}>
                  <ListItemButton onClick={toggleDrawer(false)}>
                    <ListItemText primary={submenu.submenuName} />
                    </ListItemButton>
                  </NavLink>
                  
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        )}
      </Accordion>
    );
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
        <img height={60} src={BKLOGO} />
        <ChevronLeftIcon sx={{ fontSize: 40, cursor: "pointer" }}/>
      </Box>
      <Divider />
      {auditMenu?.map((menu) => MenuAccordian(menu))}
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}  PaperProps={{
          elevation: 8,
          sx: {
          background: `linear-gradient( to right, ${green[50]}, ${green[300]})`,
          overflowY: "auto", // Enable scrolling
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          "-ms-overflow-style": "none", // Hide scrollbar for Internet Explorer
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Chrome, Edge, and Safari
          },
        },
        }} 
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
