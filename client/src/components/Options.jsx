import React, { useContext } from 'react';
import {
	Button,
	TextField,
	Grid,
	Typography,
	Container,
	Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
	const { me, name, setName, callAccepted, callEnded, leaveCall, callUser } =
		useContext(SocketContext);
	const [idToCall, setIdToCall] = React.useState('');
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Paper elevation={10} className={classes.paper}>
				<form className={classes.root} noValidate autoComplete="off">
					<Grid container className={classes.gridContainer}>
						<Grid item xs={12} md={6} className={classes.padding}>
							<Typography variant="h6" gutterBottom>
								Account Info
							</Typography>
							<TextField
								label="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></TextField>
							<CopyToClipboard
								text={me}
								className={classes.margin}
							>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									startIcon={<Assignment fontSize="large" />}
								>
									Copy ID
								</Button>
							</CopyToClipboard>
						</Grid>
						<Grid item xs={12} md={6} className={classes.padding}>
							<Typography variant="h6" gutterBottom>
								Account Info
							</Typography>
							<TextField
								label="ID To Call"
								value={idToCall}
								onChange={(e) => setIdToCall(e.target.value)}
							></TextField>
							{callAccepted && !callEnded ? (
								<Button
									variant="contained"
									color="secondary"
									startIcon={
										<PhoneDisabled fontSize="large" />
									}
									fullWidth
									onClick={leaveCall}
									className={classes.margin}
								>
									{' '}
									End Call{' '}
								</Button>
							) : (
								<Button
									variant="contained"
									color="secondary"
									startIcon={<Phone fontSize="large" />}
									fullWidth
									onClick={() => callUser(idToCall)}
									className={classes.margin}
								>
									{' '}
									End Call{' '}
								</Button>
							)}
						</Grid>
					</Grid>
				</form>
			</Paper>
			Options{children}
		</Container>
	);
};

export default Options;
