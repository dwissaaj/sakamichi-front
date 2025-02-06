'use client'
import { useRive } from '@rive-app/react-canvas';
export default function LoadSakura() {
  const { RiveComponent } = useRive({
    src: '/rive/sakamichi.riv',
    stateMachines: "turning",
    artboard: 'Sakura',
    autoplay: true,
    animations: 'Round'

  });
  
  return (
    <RiveComponent
    style={{height: 500, width: 500}}
    
    />
  );
}