import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserAccountButton from '../userAccountButton';

export const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="toggle-navigation-menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="h1">
            AI Lab
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <UserAccountButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
