import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

interface DeckProps {
  onDrawCard: () => void;
  history: string[];
}

const Deck: React.FC<DeckProps> = ({ onDrawCard, history }) => {
  const isDeck = history.length > 0;
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Deck</h3>
      <div
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          cursor: 'pointer',
          width: '100px',
          height: '145px',
          border: !isDeck ? '3px dashed #555' : 'none',
          borderRadius: '8px',
          backgroundColor: !isDeck ? 'transparent' : 'inherit',
          position: 'relative',
        }}
        onClick={!isDeck ? onDrawCard : undefined}
      >
        {isDeck ? (
          <Card id="deck-card" message="Draw" flipped={true} tapped={false} onLeftClick={onDrawCard} onRightClick={()=>{}} />
        ) : (
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: '#555',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'not-allowed',
            }}
          >
            Empty
          </div>
        )}
      </div>
      <h4>History</h4>
      <div
        ref={historyRef}
        style={{
          maxHeight: '50px',
          minHeight: '50px',
          overflowY: 'scroll',
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {history.map((entry, index) => (
            <li key={index} style={{ fontSize: '0.9rem' }}>
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Deck;
