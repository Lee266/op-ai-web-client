import Box from '@mui/material/Box';
import { Header } from '../../molecules/header';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <Box sx={{ height: '100vh' }}>
      <Header />
      {props.children}
    </Box>
  );
}
