import logo from './logo.svg';
import './App.css';
import ChatInterface from "./Components/ChatInterface";
import Sidebar from "./Components/Sidebar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Grid2} from "@mui/material";
import Conversations from "./Components/Conversations";
import React, {useEffect, useState} from "react";
import data from "./sampleData.json";

const theme = createTheme({
	palette: {
		primary: {
			main: '#AF9FCD',
			light: '#F9FAFA',
			dark: '#9785BA',
		},
		secondary: {
			main: '#D7C7F4',
			light: '#FFFFFF',
			dark: '',
		}
	}
})

function App() {
	const [talk, setTalk] = useState({
		inputMessage: "",
		response: "",
		allTalks: [],
		started: false,
	});
	const [aiData, setAiData] = React.useState([]);

	useEffect(() => {
		setAiData(data);
	}, []);

	const updateMessage = (value) => {
		setTalk({...talk, inputMessage: value});
	}

	//{todo - search response from aiData if question is matched}
	// triggered when ask button is clicked
	const handleAskClick = () => {
		let arr_responses = aiData.filter((x)=>x.question===talk.inputMessage);
		if(arr_responses.length>0){
			let r = arr_responses[0].response;
			setTalk({...talk, response: r, allTalks: [...talk.allTalks, talk.inputMessage, talk.response], started: talk.inputMessage.length > 0});
		}
		else {
			setTalk({...talk, response: "As a AI language Model, I cannot help you out!", allTalks: [...talk.allTalks, talk.inputMessage, talk.response], started: talk.inputMessage.length > 0});
		}
	};

	//{todo - save chats}
	// triggered when save button is clicked
	const handleSaveClick = () => {
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Grid2 container spacing={1} sx={{backgroundColor: '#D7C7F433'}}>
					<Grid2 item xs={1} lg={2} xl={3} sx={{backgroundColor: 'white'}}>
						<Sidebar/>
					</Grid2>
					<Grid2 item xs='grow' lg='grow' xl='grow'>
						<ChatInterface inputMessage={talk.inputMessage} updateMessage={updateMessage} handleAskClick={handleAskClick} talkStarted={talk.started} />
					</Grid2>
				</Grid2>
			</div>
		</ThemeProvider>
	);
}

export default App;
