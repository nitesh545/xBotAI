import logo from './logo.svg';
import './App.css';
import ChatInterface from "./Components/ChatInterface";
import Sidebar from "./Components/Sidebar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Grid2} from "@mui/material";
import Conversations from "./Components/Conversations";
import React, {useEffect, useState} from "react";
import data from "./sampleData.json";
import Navbar from "./Components/Navbar";

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
	const [aiData, setAiData] = useState([]);
	const [conversations, setConversations] = useState([]);
	const [showPastConversations, setShowPastConversations] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [response, setResponse] = useState('');

	const updateMessages = (newMessage) => {
		setMessages(prevMessages => [...prevMessages, newMessage]);
	}

	const updateInput = (value) => {
		setInput(value);
	}

	useEffect( () => {
		setAiData(data);
	}, []);

	useEffect(() => {
		let res = aiData.filter((x)=>x.question.includes(input));
		if(res.length === 0){setResponse("As a AI language model, I cannot help you out!")}
		else {setResponse(res[0].response);}
	}, [input]);

	const updateConversations = () => {
		setConversations(prevConv => [...prevConv, messages]);
	}

	const updateShowPastConversations = () => {
		setShowPastConversations(true);
	}

	const handleClickNewChat = () => {
		setShowPastConversations(false);
		setMessages([]);
	}

	const handleSaveClick = () => {
		updateConversations();
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Grid2 container spacing={1} sx={{backgroundColor: '#D7C7F433'}}>
					<Grid2 item xs={1} lg={2} xl={3} sx={{backgroundColor: 'white'}}>
						<Sidebar handleClickNewChat={handleClickNewChat} handleClickPastConversations={updateShowPastConversations} />
					</Grid2>
					<Grid2 item xs='grow' lg='grow' xl='grow'>
						<Navbar />
						{showPastConversations===true ? (
							<Conversations conversations={conversations}/>
						) : (
							<ChatInterface messages={messages} updateMessages={updateMessages} handleSaveClick={handleSaveClick} input={input} updateInput={updateInput} response={response}/>
						)}
					</Grid2>
				</Grid2>
			</div>
		</ThemeProvider>
	);
}

export default App;
