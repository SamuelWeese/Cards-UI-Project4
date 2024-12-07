import React from 'react';
import Card from './Card';

interface HandProps {
  name: string;
  cards: { id: string; message: string; flipped: boolean }[];
  onCardClick: (id: string) => void;
  onToggleFlip: (id: string) => void;
  onMoveCard: (id: string) => void;
}

const Hand: React.FC<HandProps> = ({ name, cards, onCardClick, onToggleFlip, onMoveCard }) => {
  return (
    <div style={{ margin: '20px' }}>
      <h3>{name}</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              id={card.id}
              message={card.message}
              flipped={card.flipped}
              onClick={() => onToggleFlip(card.id)}
            />
            <button
              onClick={() => onMoveCard(card.id)}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Move
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hand;
