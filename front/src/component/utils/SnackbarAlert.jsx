import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarAlert = ({ message, open, handleClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={message.status}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message.mess}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarAlert;