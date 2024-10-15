import React, {useEffect} from 'react';
import {
	Box,
	Button,
	Card,
	CardActionArea, CardContent,
	Container,
	Grid2,
	IconButton,
	Rating,
	TextField,
	Typography
} from "@mui/material";
import Navbar from "./Navbar";
import logo from "../assets/Logo.png";
import Suggestions from "./Suggestions";

export default function ChatInterface(props) {
	return (
		<Box sx={{width: '100%', height: '100vh'}}>
			<Navbar/>
			<Box sx={{alignContent: 'center'}}>
				<Typography variant='h4' fontWeight='bold' align='center' mt={29}>How Can I Help You Today?</Typography>
				<Box component='img' src={logo} alt='logoimage' sx={{width: '5rem'}}/>
			</Box>
			<Box sx={{
				display: 'flex',
				height: '55%',
				flexDirection: 'column',
				justifyContent: 'flex-end',
			}}>
				{ !props.talkStarted && <Suggestions />}
				<Box sx={{display: 'flex', justifyContent: 'center',}}>
					<Box sx={{display: 'flex', justifyContent: 'center',}}>
						<TextField
							value={props.inputMessage}
							onChange={(e)=>{props.updateMessage(e.target.value);}}
							sx={{margin: '1rem', width: '140vh'}}
						/>
						<Button variant="contained" color="primary" onClick={() => {
							props.handleAskClick();
						}} sx={{width: '5vw', margin: '1rem'}}>Ask</Button>
						<Button variant="contained" color="primary" onClick={() => {
						}} sx={{width: '5vw', margin: '1rem'}}>Save</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
