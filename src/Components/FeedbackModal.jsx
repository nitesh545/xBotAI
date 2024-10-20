import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {TextField} from "@mui/material";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	height: 190,
	bgcolor: 'rgba(250, 247, 255, 1)',
	borderRadius: '0.5rem',
	boxShadow: 24,
	p: 4,
};

export default function BasicModal(props) {
	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
						<Box sx={{display: 'flex'}}>
							<LightbulbOutlinedIcon/>
							<Typography id="modal-modal-title" variant="h6" component="h2" sx={{ml: '0.5rem'}}>
								Provide Additional Feedback
							</Typography>
						</Box>
						<Button onClick={props.handleClose}>X</Button>
					</Box>
					<TextField multiline rows={4} sx={{width:'100%'}}/>
					<Box sx={{mt: 1, display: 'flex', justifyContent: 'flex-end'}}>
					<Button variant='contained' onClick={props.handleClose} >Submit</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}