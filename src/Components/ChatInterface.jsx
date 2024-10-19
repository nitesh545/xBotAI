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
import FeedbackModal from "./FeedbackModal";

export default function ChatInterface(props) {
	const [showThumbs, setShowThumbs] = React.useState(false);
	const [showRating, setShowRating] = React.useState(false);
	const [rating, setRating] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {

	}, []);

	const handleMouseEnter = () => {
		setShowThumbs(true);
	}

	const handleMouseLeave = () => {
		setShowThumbs(false);
	}

	const handleClickShowRating = () => {
		setShowThumbs(false);
		setShowRating(true);
	}

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
									}} onMouseEnter={()=>{if(index%2==1){handleMouseEnter();}}} onMouseLeave={()=>{if(index%2==1){handleMouseLeave();}}}>
										<img src={index % 2 === 0 ? user : logosmall} alt="userImage" />
										<Box sx={{mx: '2rem'}}>
											<Typography variant='h4'
														align='left'>{index % 2 === 0 ? "You" : "Soul AI"}</Typography>
											<Typography variant='p' align='left'>{talk}</Typography>
											{
												index ===  props.talk.allTalks.length-1?
													( showThumbs && !showRating && (<Box sx={{display: 'flex'}}>
													<Typography variant='body2' align='left'>10:33 AM</Typography>

													<IconButton onClick={()=>{setShowRating(true);}}>
														<ThumbUpAltOutlinedIcon fontSize='small' sx={{ml: '1rem'}} color='disabled'/>
													</IconButton>
													<IconButton onClick={()=>{setShowRating(true);}}>
														<ThumbDownOffAltOutlinedIcon fontSize='small' sx={{ml: '0.5rem'}}
																					 color='disabled'/>
													</IconButton>
												</Box>)): (null)
											}
											{
												index ===  props.talk.allTalks.length - 1 && showRating && (
													<Box sx={{display: 'flex'}}>
														<Typography variant='body2' align='left'>10:33 AM</Typography>
														<Rating value={rating} sx={{ml:'1rem'}} onChange={(event, newValue)=>{setRating(newValue);setOpen(true);}} />
														<FeedbackModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
													</Box>
												)
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
