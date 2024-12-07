import React from 'react';

interface DeckProps {
  onDrawCard: () => void;
  history: string[];
}

const Deck: React.FC<DeckProps> = ({ onDrawCard, history }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Deck</h3>
      <button
        onClick={onDrawCard}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Draw Card
      </button>
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

export default Deck;
