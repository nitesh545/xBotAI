import React from 'react';
import {Card, CardActionArea, CardContent, Grid2, Typography} from "@mui/material";

const options = ["Hi, what is the weather", "Hi, what is my location", "Hi, what is the temperature", "Hi, how are you"];

export default function Suggestions() {
	return (
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
	);
}