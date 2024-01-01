import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Header } from '@/components/molecules/header';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <Box sx={{ height: '100vh' }}>
      <Header />
      <Toolbar />
      {props.children}
    </Box>
  );
}
