'use client';

import { Box } from '@mui/material';
import { NextPage } from 'next';
import MainLayout from '../../components/layouts/MainLayout';
import NumberEstimateContainer from '@/components/organism/containers/numberEstimateContainer';

const AiPage: NextPage = () => {
  return (
    <MainLayout>
      <Box sx={{ height: '100vh' }}>
        <NumberEstimateContainer canvasId="number-canvas" />
      </Box>
    </MainLayout>
  );
};

export default AiPage;
