import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Navbar() {
	return (
		<div>
			<AppBar position='static' elevation={0} color='light'>
				<Toolbar>
					<Typography variant="h6" fontWeight="bold" color='primary'>Bot AI</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}