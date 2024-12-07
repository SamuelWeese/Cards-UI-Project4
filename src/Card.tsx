import React from 'react';

interface CardProps {
  id: string;
  message: string;
  flipped: boolean;
  image?: string; // Optional image path
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, message, flipped, image, onClick }) => {
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
    </div>
  );
};

export default Card;
