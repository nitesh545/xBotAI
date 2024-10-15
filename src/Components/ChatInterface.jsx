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
import data from "../sampleData.json";

const options = ["Hi, what is the weather", "Hi, what is my location", "Hi, what is the temperature", "Hi, how are you"];

export default function ChatInterface() {
	const [inputMessage, setInputMessage] = React.useState("");
	const [aiData, setAiData] = React.useState([]);

	useEffect(() => {
		setAiData(data);
	}, []);

	//{todo - search response from aiData if question is matched}
	// triggered when ask button is clicked
	const handleAskClick = () => {
		aiData.filter((x)=>x===inputMessage);
	};

	//{todo - save chats}
	// triggered when save button is clicked
	const handleSaveClick = () => {
	};

	// setInputMessage with given input in <TextField>
	const readInput = (e) => {
		setInputMessage(e.target.value);
	}

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
				<Grid2 container spacing={2}>
					{
						options.map((option, index) => (
							<Grid2 size={6} xs={12} key={index}>
								<Card>
									<CardActionArea>
										<CardContent>
											<Typography variant='h6' align='left' fontWeight='bold'>
												{option}
											</Typography>
											<Typography variant='body2' align='left'>
												Get immediate AI generated response
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid2>
						))
					}
				</Grid2>
				<Box sx={{display: 'flex', justifyContent: 'center',}}>
					<Box sx={{display: 'flex', justifyContent: 'center',}}>
						<TextField
							value={inputMessage}
							onChange={(e)=>{readInput(e); console.log(inputMessage);}}
							sx={{margin: '1rem', width: '140vh'}}
						/>
						<Button variant="contained" color="primary" onClick={() => {
						}} sx={{width: '5vw', margin: '1rem'}}>Ask</Button>
						<Button variant="contained" color="primary" onClick={() => {
						}} sx={{width: '5vw', margin: '1rem'}}>Save</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
