import React from 'react';

interface CardProps {
  id: string;
  message: string;
  flipped: boolean;
  onClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, message, flipped, onClick }) => {
  return (
    <div
      style={{
        perspective: '1000px',
        width: '100px',
        height: '150px',
      }}
      onClick={() => onClick(id)}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Front of the card */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {message}
        </div>

        {/* Back of the card */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'blue',
            border: '1px solid black',
            borderRadius: '8px',
            transform: 'rotateY(180deg)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.2rem',
          }}
        >
          Card Back
        </div>
      </div>
    </div>
  );
};

export default Card;
