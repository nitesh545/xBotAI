import logo from './logo.svg';
import './App.css';
import ChatInterface from "./Components/ChatInterface";
import Sidebar from "./Components/Sidebar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Grid2} from "@mui/material";
import Conversations from "./Components/Conversations";

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
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Grid2 container spacing={1} sx={{backgroundColor: '#D7C7F433'}}>
					<Grid2 item xs={1} lg={2} xl={3} sx={{backgroundColor: 'white'}}>
						<Sidebar/>
					</Grid2>
					<Grid2 item xs='grow' lg='grow' xl='grow'>
						<ChatInterface/>
					</Grid2>
				</Grid2>
			</div>
		</ThemeProvider>
	);
}

export default App;
