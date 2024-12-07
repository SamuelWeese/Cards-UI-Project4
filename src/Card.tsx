import React, { useState } from 'react';

interface CardProps {
  id: string;
  message: string;
  flipped: boolean;
  image?: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  onFlip?: () => void;
  onDiscard?: () => void;
  onPlay?: () => void;
  onTap?: () => void;
  cardWidth?: number;
  cardHeight?: number;
}

const Card: React.FC<CardProps> = ({ 
  id, 
  message, 
  flipped, 
  image, 
  onLeftClick,
  onRightClick,
  onFlip, 
  onDiscard, 
  onPlay,
  onTap,
  cardWidth = 100,
  cardHeight = 145
}) => {
  const [isTapped, setIsTapped] = useState(false);

  const handleLeftClick = () => {
    onLeftClick();
  };
  const handleRightClick = () => {
    onRightClick();
  };
  return (
    <div
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        border: image && !flipped ? '0' : '1px solid black',
        borderRadius: '8px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: flipped ? '#444' : '#Fa0',
        color: flipped ? '#fff' : '#000',
        cursor: 'pointer',
        position: 'relative',
        transform: isTapped ? 'rotate(90deg)' : 'none', // Rotate the card to simulate tapping
        opacity: isTapped ? 0.6 : 1, // Reduce opacity to show it's tapped
      }}
    >
      {flipped ? (
        <div style={{ fontSize: '12px' }}>Back</div>
      ) : image ? (
        <img
          src={image}
          alt={message}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      ) : (
        <div style={{ fontSize: '12px' }}>{message}</div>
      )}
      {onFlip && (
        <img 
          src="/icons/flip.svg" 
          alt="Click to flip" 
          onClick={(e) => { e.stopPropagation(); onFlip(); }} 
          style={{ 
            position: 'absolute',
            bottom: '5px',
            left: '5px',
            cursor: 'pointer', 
            backgroundColor: '#EEEA',
            transform: 'scale(0.15)',
            transformOrigin: 'bottom left',
            width: '100px',
            height: '100px',
          }} 
        />
      )}
      <div style={{
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        display: 'flex',
        gap: '5px',
      }}>
        {onDiscard && (
          <img 
          src="/icons/trash.svg" 
          alt="Click to discard" 
          onClick={(e) => { e.stopPropagation(); onDiscard(); }} 
          style={{ 
            position: 'absolute',
            bottom: '5px',
            right: '5px',
            cursor: 'pointer', 
            backgroundColor: '#EEEA',
            transform: 'scale(0.15)',
            transformOrigin: 'bottom left',
            width: '100px',
            height: '100px',
          }} 
        />
        )}
        {onPlay && (
          <img 
          src="/icons/play.svg" 
          alt="Click to play" 
          onClick={(e) => { e.stopPropagation(); onPlay(); }} 
          style={{ 
            position: 'absolute',
            bottom: '5px',
            textAlign: 'center',
            cursor: 'pointer', 
            backgroundColor: '#EEEA',
            transform: 'scale(0.15)',
            transformOrigin: 'bottom left',
            width: '100px',
            height: '100px',
          }}
        />
        )}
        {onTap && (
          <img 
          src="/icons/tap.svg" 
          alt="Click to tap" 
          onClick={(e) => { e.stopPropagation(); onTap(); }} 
          style={{ 
            position: 'absolute',
            top: '5px',
            textAlign: 'center',
            cursor: 'pointer', 
            backgroundColor: '#EEEA',
            transform: 'scale(0.15)',
            transformOrigin: 'bottom left',
            width: '100px',
            height: '100px',
          }}
          />
        )}
      </div>
    </div>
  );
};

const buttonStyle = {
  fontSize: '10px',
  padding: '2px 4px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#555',
  color: '#fff',
  cursor: 'pointer',
};

export default Card;
