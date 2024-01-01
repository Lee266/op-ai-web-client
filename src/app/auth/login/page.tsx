'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Login() {
  return (
    <Container className="min-h-screen" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div>
          <Typography variant="h4" component="h1">
            AI Lab
          </Typography>
          <Button className="mt-2" size="large" variant="contained" fullWidth href="/api/auth/login">
            Log in
          </Button>
          <Button className="mt-2" size="large" variant="contained" fullWidth href="/api/auth/signup">
            Sign up
          </Button>
        </div>
      </Box>
    </Container>
  );
}
