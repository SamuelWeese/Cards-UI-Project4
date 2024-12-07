import React from 'react';
import Card from './Card';

interface HandProps {
  name: string;
  cards: { id: string; message: string; flipped: boolean; image?: string }[];
  onRightClick: (id: string) => void;
  onLeftClick: (id: string) => void;
  onFlip?: (id: string) => void;
  onDiscard?: (id: string) => void;
  onPlay?: (id: string) => void;
  onTap?: (id: string) => void;
}

const Hand: React.FC<HandProps> = ({ name, cards, 
  onLeftClick,
  onRightClick,
  onFlip, 
  onDiscard, 
  onPlay,
  onTap,
  }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>{name}'s Hand</h3>
      <div
        style={{
          display: 'flex',
          gap: '3px',
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
              onLeftClick={() => onLeftClick(card.id)}
              onRightClick={() => onRightClick(card.id)}
              onFlip={onFlip ? () => onFlip(card.id) : undefined}
              onDiscard={onDiscard ? () => onDiscard(card.id) : undefined}
              onPlay={onPlay ? () => onPlay(card.id) : undefined}
              onTap={onTap ? () => onTap(card.id) : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hand;
