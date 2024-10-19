import React, {useEffect} from 'react';
import {
	Box,
	Button,
	Card,
	CardActionArea, CardContent,
	Container,
	Grid2,
	IconButton,
	Rating, Stack,
	TextField,
	Typography
} from "@mui/material";
import Navbar from "./Navbar";
import logo from "../assets/Logo.png";
import logosmall from "../assets/logo87.png";
import user from "../assets/userImage.png";
import Suggestions from "./Suggestions";
import ChatCard from "./ChatCard";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

export default function ChatInterface(props) {
	const [showThumbs, setShowThumbs] = React.useState(false);

	useEffect(() => {

	}, []);

	const handleMouseEnter = () => {
		setShowThumbs(true);
	}

	const handleMouseLeave = () => {
		setShowThumbs(false);
	}

	return (
		<Box sx={{width: '100%', height: '100vh'}}>
			<Navbar/>
			<Box sx={{alignContent: 'center'}}>
				{!props.talk.started && (
					<div><Typography variant='h4' fontWeight='bold' align='center'>How Can I Help You
						Today?</Typography>
						<Box component='img' src={logo} alt='logoimage' sx={{width: '5rem'}}/></div>)}
			</Box>
			<Box sx={{
				display: 'flex',
				height: '85%',
				flexDirection: 'column',
				justifyContent: 'flex-end',
			}}>
				{!props.talk.started && <Suggestions/>}
				{props.talk.started &&
					<Stack alignItems="center">
						{
							props.talk.allTalks.map((talk, index) => (
								<Stack key={index}>
									<Card sx={{
										display: "flex",
										margin: '1rem',
										padding: '1rem',
										width: '85vw',
										borderRadius: '1.5rem',
										backgroundColor: 'rgba(215, 199, 244, 0.13)'
									}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
										<img src={index % 2 === 0 ? user : logosmall} alt="userImage" />
										<Box sx={{mx: '2rem'}}>
											<Typography variant='h4'
														align='left'>{index % 2 === 0 ? "You" : "Soul AI"}</Typography>
											<Typography variant='p' align='left'>{talk}</Typography>
											{
												index % 2 === 1 ?
													( showThumbs && (<Box sx={{display: 'flex', mt: '0.25rem'}}>
													<Typography variant='body2' align='left'>10:33 AM</Typography>

													<IconButton>
														<ThumbUpAltOutlinedIcon sx={{ml: '1rem'}} color='disabled'/>
													</IconButton>
													<IconButton>
														<ThumbDownOffAltOutlinedIcon sx={{ml: '0.5rem'}}
																					 color='disabled'/>
													</IconButton>
												</Box>)): (null)
											}
										</Box>
									</Card>
								</Stack>
							))
						}
					</Stack>
				}
				<Box sx={{display: 'flex', justifyContent: 'center',}}>
					<Box sx={{display: 'flex', justifyContent: 'center',}}>
						<TextField
							value={props.inputMessage}
							onChange={(e) => {
								props.updateMessage(e.target.value);
							}}
							sx={{margin: '1rem', width: '140vh'}}
						/>
						<Button variant="contained" color="primary" onClick={() => {
							props.handleAskClick();
						}} sx={{width: '5vw', margin: '1rem'}}>Ask</Button>
						<Button variant="contained" color="primary" onClick={() => {
							props.updateConversations();
						}} sx={{width: '5vw', margin: '1rem'}}>Save</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
