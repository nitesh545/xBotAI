import React from 'react';
import {Box, Button, Icon, Typography} from "@mui/material";
import {Image} from "@mui/icons-material";
import editIcon from "../assets/edit.png";
import logosmall from "../assets/logosmall.png";

export default function NewChat(props) {
	return (
		<div>
			<Button variant={'contained'} startIcon={<img src={logosmall} alt='logosmall'/>} endIcon={<img
				src={editIcon} alt='editIcon'/>} sx={{borderRadius: 0, elevation: 0, fontStyle: 'normal'}}
			onClick={props.handleClickNewChat}>New Chat</Button>
		</div>
	);
}