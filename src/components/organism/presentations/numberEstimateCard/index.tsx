'use client';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface NumberEstimateCardProps {
  canvasId: string;
  result?: { prediction?: [number[]] };
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onEstimateImage: () => void;
}

export default function NumberEstimateCard({
  canvasId,
  result,
  onUndo,
  onRedo,
  onClear,
  onEstimateImage,
}: NumberEstimateCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          数字認識
        </Typography>
        <div className="flex justify-center items-center">
          <canvas id={canvasId} />
        </div>
        {result && result?.prediction && (
          <div>
            <Typography variant="body1" component="div">
              結果
            </Typography>
            <ul>
              {result.prediction[0].map((item, index) => (
                <div key={index}>
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button onClick={onClear}>Clear</Button>
        <Button onClick={onUndo}>Undo</Button>
        <Button onClick={onRedo}>Redo</Button>
        <Button onClick={onEstimateImage}>判定する</Button>
      </CardActions>
    </Card>
  );
}
