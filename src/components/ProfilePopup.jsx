import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { stringToColor } from '../utils/colorUtils'
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { getUserDetailsObj } from '../utils/loginUtil';

function ProfilePopup({ open, logOut, close }) {
    const navigate = useNavigate();
    const userDetails = getUserDetailsObj();
    const getFullName = (user) => {
        const { userFirstName, userMiddleName, userLastName } = user;
        // Join all name parts, filtering out null or empty values
        return [userFirstName, userMiddleName, userLastName].filter(Boolean).join(" ");
    }
    const getAvatarName = () => {
        let str = "";
        let arrayOFName = userName.split(" ");
        arrayOFName.forEach((element) => {
            if (!element) return;
            str += element[0];
            return str
        });

    }
    const userName = userDetails && getFullName(userDetails);
    let avatorname  = getAvatarName(userName);

    return (
        <Box sx={
            {
                margin: "1.5rem",
                marginBottom: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Avatar
                sx={{ bgcolor: stringToColor(userName) }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                alt="Profile Picture"
            //{...stringAvatar(userName)}
            //src={DemoImage}
            >
                {avatorname}
            </Avatar>
            <Typography fontSize="1rem">
                {userName}
            </Typography>
            <Typography fontSize="0.8rem">
                 {userDetails ? `${userDetails.roleDescription} (${userDetails.roleShortName})` : '' }
            </Typography>
            <Typography fontSize="0.8rem">
                Login Id:  {userDetails && userDetails.loginId}
            </Typography>
            <Button size="small" sx={{
                marginTop: "1rem"
            }}
                onClick={() => {
                    navigate('/changepassword')
                    close()
                }}>
                <KeyIcon size="small" style={{ marginRight: "0.2rem" }} />
                Change Password
            </Button>
            <Button color="error" size="small" onClick={
                () => {
                    logOut()
                }
            }>
                <LogoutIcon size="small" style={{ marginRight: "0.2rem" }} /> Log Out
            </Button>


        </Box>
    );
}

export default ProfilePopup;