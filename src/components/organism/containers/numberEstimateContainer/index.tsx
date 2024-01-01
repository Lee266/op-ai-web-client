'use client';

import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import NumberEstimateCard from '../../presentations/numberEstimateCard';
import { useNumberEstimate } from '@/hooks/useNumberEstimate';

const CANVAS_ID = 'number-canvas';
const CANVAS_SIZE = 224;

interface NumberEstimateContainerProps {
  canvasId: string;
}

export default function NumberEstimateContainer({ canvasId }: NumberEstimateContainerProps) {
  const [canvas, setCanvas] = useState<fabric.Canvas>();
  const { trigger: numberEstimateTrigger, data } = useNumberEstimate();
  const model = 'vgg';
  let canvasHistory: fabric.Object[] = [];

  useEffect(() => {
    const c = new fabric.Canvas(CANVAS_ID, {
      isDrawingMode: true,
      width: CANVAS_SIZE,
      height: CANVAS_SIZE,
      backgroundColor: '#fff',
    });
    c.freeDrawingBrush.color = '#000';
    c.freeDrawingBrush.width = 25;
    setCanvas(c);
    return () => {
      c.dispose();
    };
  }, []);

  const estimateImage = async () => {
    if (canvas !== undefined) {
      const imageData = canvas.toDataURL({ format: 'png' });
      const base64Data = imageData.replace(/^data:image\/png;base64,/, '');
      const blob = new Blob([Buffer.from(base64Data, 'base64')], { type: 'image/png' });
      // RGB
      // const imageData = canvas.toDataURL({ format: 'jpeg',});
      // const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, '');
      // const blob = new Blob([Buffer.from(base64Data, 'base64')], { type: 'image/jpeg' });

      // 判定関数に画像を送信
      numberEstimateTrigger(
        { image: blob, model: model },
        {
          onSuccess(data) {
            if (data.status >= 200 && data.status < 300) {
              console.log('ok');
            } else {
              console.log(data);
            }
          },
          onError(err) {
            console.log(err);
          },
        },
      );
    }
  };

  const undo = () => {
    if (canvas !== undefined && canvas._objects.length > 0) {
      const copyArray = [...canvasHistory];
      copyArray.push(canvas._objects.pop()!);
      canvasHistory = copyArray;
      canvas.renderAll();
    }
  };

  const redo = () => {
    if (canvas !== undefined && canvasHistory.length > 0) {
      canvas.add(canvasHistory.pop()!);
    }
  };

  const clear = () => {
    if (canvas !== undefined) {
      canvas.clear();
      canvasHistory = [];
      canvas.setBackgroundColor('#fff', () => canvas.renderAll());
    }
  };

  return (
    <NumberEstimateCard
      canvasId={canvasId}
      onUndo={undo}
      onRedo={redo}
      onClear={clear}
      onEstimateImage={estimateImage}
      result={data}
    />
  );
}
