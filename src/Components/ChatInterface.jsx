import React, {useState} from 'react';
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Avatar,
	Box, IconButton, Rating
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import logosmall from "../assets/logo87.png";
import user from "../assets/userImage.png";
import logo from "../assets/Logo.png";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import FeedbackModal from "./FeedbackModal";

const ChatInterface = (props) => {

	const [showThumbs, setShowThumbs] = React.useState(false);
	const [showRating, setShowRating] = React.useState(false);
	const [rating, setRating] = React.useState(0);
	const [open, setOpen] = React.useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};

	const handleClickShowRating = () => {
		setShowThumbs(false);
		setShowRating(true);
	}

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSend = () => {
		if (props.input.trim() === '') return;

		const newMessage = {
			text: props.input,
			sender: 'You',
			time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
			rate: rating,
		};

		props.updateMessages(newMessage);
		// props.updateInput('');

		// Simulate bot response
		setTimeout(() => {
			const botResponse = {
				text: props.response,
				sender: 'Soul AI',
				time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
			};
			props.updateMessages(botResponse);
		}, 1000);
	};

	return (
		<Box sx={{maxWidth: '100vw', width: '70vw', margin: 'auto', padding: 2,}}>
			<Box sx={{
				height: '80vh',
				overflowY: 'auto',
				marginBottom: 2,
				display: 'flex',
				justifyContent: 'flex-end',
				flexDirection: 'column'
			}}>
				{props.messages.map((message, index) => (
					<Card key={index} sx={{marginBottom: 2, backgroundColor: 'rgba(215, 199, 244, 0.13)'}} onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
						<CardContent>
							<Box sx={{display: 'flex', alignItems: 'center', marginBottom: 1}}>
								<Avatar src={message.sender === 'You' ? user : logo} sx={{
									marginRight: 1,
									bgcolor: message.sender === 'You' ? 'primary.main' : 'secondary.main'
								}}>
									{message.sender[0]}
								</Avatar>
								<Box sx={{}}>
									<Typography align='left' variant="subtitle1" fontWeight='bold'>{message.sender}</Typography>
									<Typography align='left' variant="body1">{message.text}</Typography>
									<Box sx={{display: 'flex'}}>
										<Typography align='left' variant="caption" sx={{display: 'block', marginTop: 1}}>
											{message.time}
										</Typography>
										{message.sender === 'Soul AI' && hoveredIndex === index && !showRating && (
											<Box sx={{display: 'flex', marginTop: 1}}>
												{/*<Typography variant='body2' align='left'>{message.time}</Typography>*/}
												<IconButton onClick={() => setShowRating(true)} sx={{width: '0.8rem', height: '0.8rem'}}>
													<ThumbUpAltOutlinedIcon fontSize='small' sx={{ml: '1rem'}} color='disabled'/>
												</IconButton>
												<IconButton onClick={() => setShowRating(true)} sx={{width: '0.8rem', height: '0.8rem'}}>
													<ThumbDownOffAltOutlinedIcon fontSize='small' sx={{ml: '2rem'}} color='disabled'/>
												</IconButton>
											</Box>
										)}
										{message.sender === 'Soul AI' && hoveredIndex === index && showRating && (
											<Box sx={{display: 'flex'}}>
												<Rating
													value={rating}
													sx={{ml:'1rem'}}
													onChange={(event, newValue) => {
														setRating(newValue);
														setOpen(true);
													}}
												/>
												<FeedbackModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
											</Box>
										)}
									</Box>
								</Box>
							</Box>
						</CardContent>
					</Card>
				))}
			</Box>
			<Box sx={{display: 'flex'}}>
				<TextField
					fullWidth
					variant="outlined"
					value={props.input}
					onChange={(e) => props.updateInput(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && handleSend()}
					placeholder="Type a message..."
				/>
				<Button
					variant="contained"
					onClick={handleSend}
					sx={{marginLeft: 1}}
				>
					Ask
				</Button>
				<Button
					variant="contained"
					onClick={props.handleSaveClick}
					sx={{marginLeft: 1}}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default ChatInterface;