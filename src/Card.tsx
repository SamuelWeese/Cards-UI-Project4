import React from 'react';

interface CardProps {
  id: string;
  message: string;
  flipped: boolean;
  image?: string; // Optional image path
  onClick: () => void;
  onFlip?: () => void;
  onDiscard?: () => void;
  onPlay?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  id, 
  message, 
  flipped, 
  image, 
  onClick, 
  onFlip, 
  onDiscard, 
  onPlay 
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '100px',
        height: '145px',
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

      <div style={{
        position: 'absolute',
        bottom: '5px',
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        {onFlip && (
          <button 
            onClick={(e) => { e.stopPropagation(); onFlip(); }} 
            style={buttonStyle}
          >
            Flip
          </button>
        )}
        {onDiscard && (
          <button 
            onClick={(e) => { e.stopPropagation(); onDiscard(); }} 
            style={buttonStyle}
          >
            Discard
          </button>
        )}
        {onPlay && (
          <button 
            onClick={(e) => { e.stopPropagation(); onPlay(); }} 
            style={buttonStyle}
          >
            Play
          </button>
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
