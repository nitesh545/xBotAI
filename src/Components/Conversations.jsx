import React from 'react';
import Navbar from "./Navbar";
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Grid2,
	IconButton,
	Stack,
	TextField,
	Typography
} from "@mui/material";
import logo from "../assets/Logo.png";
import user from "../assets/userImage.png";
import logosmall from "../assets/logo87.png";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

export default function Conversations(props) {
	return (
		<Box sx={{width: '85vh', height: '100vh'}}>
			<Box sx={{alignContent: 'center'}}>
				<Typography variant='h4' fontWeight='bold' align='center'>Conversation History</Typography>
			</Box>
			<Box sx={{
				display: 'flex',
				height: '85%',
				flexDirection: 'column',
				justifyContent: 'flex-end',
			}}>
				<Typography vairant='h2' align='left' fontWeight='bold'>Today's Chats</Typography>
				<Box>
					{
						props.conversations.map((talk, index) =>
							(
								<Stack key={index} sx={{display:'flex', flexDirection:'column', justifyContent: 'flex-end'}}>
									<Card sx={{
										display: "flex",
										margin: '1rem',
										padding: '1rem',
										width: '85vw',
										borderRadius: '1.5rem',
										backgroundColor: 'rgba(215, 199, 244, 0.13)'
									}}>

										<Box sx={{mx: '2rem'}}>

											<Typography variant='p' align='left'>{talk.map((t, i) => (
												<Box sx={{display: 'flex'}}>
													<img src={i % 2 === 0 ? user : logosmall} alt="userImage"
														 style={{width: '4rem', height: '4rem'}}/>
													<Box sx={{ml: '1rem'}}>
														<Typography variant='h6' fontWeight='bold'
																	align='left'>{t.sender}
														</Typography>
														<Typography key={i}>{t.text}</Typography>
														<Typography key={i} variant='caption'>{t.time}</Typography>
													</Box>
												</Box>
											))}</Typography>
										</Box>
									</Card>
								</Stack>
							)
						)
					}
				</Box>
			</Box>
		</Box>
	);
}
