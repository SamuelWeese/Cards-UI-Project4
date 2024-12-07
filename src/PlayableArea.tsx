import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

interface PlayableAreaProps {
  onDrawCard: () => void;
  history: { id: string; message: string; flipped: boolean; image?: string }[];
}

const PlayableArea: React.FC<PlayableAreaProps> = ({ onDrawCard, history }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number | null>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (history.length > 0) {
      setCurrentCardIndex(history.length - 1);
    }
  }, [history]);

  const cyclePreviousCard = () => {
    if (currentCardIndex === null || currentCardIndex === 0) return;
    setCurrentCardIndex(currentCardIndex - 1);
  };

  const cycleNextCard = () => {
    if (currentCardIndex === null || currentCardIndex === history.length - 1) return;
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const isDeck = history.length > 0;

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Playable Area</h3>
      <div
        style={{
          display: 'flex',
          gap: '3px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
        onClick={isDeck ? undefined : onDrawCard}
      >
        {isDeck && currentCardIndex !== null ? (
          <Card
            id={history[currentCardIndex].id}
            message={history[currentCardIndex].message}
            flipped={history[currentCardIndex].flipped}
            image={history[currentCardIndex].image}
            onLeftClick={onDrawCard}
            onRightClick={()=>{}}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100px',
              height: '145px',
              border: '3px dashed #555',
              borderRadius: '8px',
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
      <div>
        <button onClick={cyclePreviousCard} disabled={currentCardIndex === null || currentCardIndex === 0}>
          Previous
        </button>
        <button onClick={cycleNextCard} disabled={currentCardIndex === null || currentCardIndex === history.length - 1}>
          Next
        </button>
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
              {entry.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayableArea;
