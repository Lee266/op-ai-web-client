import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const FeedBackSnackbar = () => {
  return (
    <>
      <Snackbar autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};
