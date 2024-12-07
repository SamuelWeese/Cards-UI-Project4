import React from 'react';
import Card from './Card';

interface HandProps {
  name: string;
  cards: { id: string; message: string; flipped: boolean; image?: string }[];
  onCardClick: (id: string) => void;
  onToggleFlip: (id: string) => void;
  onMoveCard?: (id: string) => void; // Optional for future use
}

const Hand: React.FC<HandProps> = ({ name, cards, onCardClick, onToggleFlip }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>{name}'s Hand</h3>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {cards.map((card) => (
          <div key={card.id} style={{ position: 'relative' }}>
            <Card
              id={card.id}
              message={card.message}
              flipped={card.flipped}
              image={card.image}
              onClick={() => onCardClick(card.id)}
            />
            <button
              onClick={() => onToggleFlip(card.id)}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.8rem',
                padding: '5px',
                cursor: 'pointer',
              }}
            >
              Flip
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hand;
