import React from 'react';
import {Drawer, Button, Avatar, Icon, Box} from "@mui/material";
import {Image} from "@mui/icons-material";
import StyledButton from "./StyledButton";
import NewChat from "./NewChat";

export default function Sidebar(props) {
	return (
		<div>
			<Box color='primary'>
				<NewChat handleClickNewChat = {props.handleClickNewChat} />
				<StyledButton text="Past Conversations" handleClickPastConversations={props.handleClickPastConversations} />
			</Box>
		</div>
	);
}