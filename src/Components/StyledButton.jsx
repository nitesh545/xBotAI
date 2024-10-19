import React from 'react';
import {Button, Link} from "@mui/material";

export default function StyledButton(props) {
	return	(
		<Button variant='contained' sx={{color: "secondary", borderRadius: '1rem', fontSize: '0.5rem', margin: '1rem'}}
			onClick={props.handleClickPastConversations}>
			{props.text}
		</Button>
	);
}