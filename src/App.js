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
	const [pendingQuestion, setPendingQuestion] = useState("");
	const [conversations, setConversations] = React.useState([]);

	useEffect( () => {
		setAiData(data);
	}, []);

	useEffect(() => {
		if (pendingQuestion) {
			const arr_responses = aiData.filter((x) => x.question === pendingQuestion);
			let r = arr_responses.length > 0
				? arr_responses[0].response
				: "As an AI language Model, I cannot help you out!";

			setTalk(prevTalk => ({
				...prevTalk,
				response: r,
				allTalks: [...prevTalk.allTalks, pendingQuestion, r],
			}));
			setPendingQuestion("");
		}
	}, [pendingQuestion, aiData]);

	const updateMessage = (value) => {
		setTalk({...talk, inputMessage: value});
	}

	const updateConversations = () => {
		setConversations([...conversations, talk.allTalks]);
	}

	//{todo - search response from aiData if question is matched}
	// triggered when ask button is clicked
	const handleAskClick = () => {
		setTalk(prevTalk => ({
			...prevTalk,
			started: true,
			inputMessage: "",
			}));
		setPendingQuestion(talk.inputMessage);
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
						<ChatInterface talk={talk} updateMessage={updateMessage} handleAskClick={handleAskClick} updateConversations={updateConversations}/>
					</Grid2>
				</Grid2>
			</div>
		</ThemeProvider>
	);
}

export default App;
