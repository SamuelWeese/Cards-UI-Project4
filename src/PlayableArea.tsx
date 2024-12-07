import React from 'react';
import Card from './Card';

interface PlayableAreaProps {
  cards: { id: string; message: string; flipped: boolean }[];
  onCardPlay: (id: string) => void;
  history: string[];
}

const PlayableArea: React.FC<PlayableAreaProps> = ({ cards, onCardPlay, history }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Playable Area</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              id={card.id}
              message={card.message}
              flipped={card.flipped}
              onClick={() => onCardPlay(card.id)}
            />
          </div>
        ))}
      </div>
      <h4>History</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {history.map((entry, index) => (
          <li key={index} style={{ fontSize: '0.9rem' }}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayableArea;
