import React, { useState } from 'react';

interface CardProps {
  id: string;
  message: string;
  flipped: boolean;
  tapped: boolean;
  image?: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
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
  tapped,
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
  return (
    <div
      onClick={onLeftClick}
      onContextMenu={onRightClick}
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
        transform: tapped ? 'rotate(90deg)' : 'none',
        opacity: tapped ? 0.6 : 1,
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

      {/* Bottom Left - onFlip */}
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

      {/* Bottom right - onDiscard */}
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
            transformOrigin: 'bottom right',
            width: '100px',
            height: '100px',
          }} 
        />
      )}

      {/* Bottom left (above onFlip) - onPlay */}
      {onPlay && (
        <img 
          src="/icons/play.svg" 
          alt="Click to play" 
          onClick={(e) => { e.stopPropagation(); onPlay(); }} 
          style={{ 
            position: 'absolute',
            bottom: '40px', // Position above onFlip
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

      {/* Left (above onFlip) - onTap */}
      {onTap && (
        <img 
          src="/icons/tap.png" 
          alt="Click to tap" 
          onClick={(e) => { e.stopPropagation(); onTap(); }} 
          style={{ 
            position: 'absolute',
            bottom: '75px',
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
    </div>
  );
};

export default Card;
