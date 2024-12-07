import React, { useState } from 'react';
import Hand from './Hand';

interface Card {
  id: string;
  message: string;
  flipped: boolean;
}

const App: React.FC = () => {
  const [hand1, setHand1] = useState<Card[]>([
    { id: 'c1', message: 'Ace of Spades', flipped: false },
    { id: 'c2', message: 'King of Hearts', flipped: false },
  ]);

  const [hand2, setHand2] = useState<Card[]>([
    { id: 'c3', message: 'Queen of Diamonds', flipped: false },
    { id: 'c4', message: 'Jack of Clubs', flipped: false },
  ]);

  const toggleFlip = (id: string, hand: Card[], setHand: React.Dispatch<React.SetStateAction<Card[]>>) => {
    setHand(
      hand.map((card) => (card.id === id ? { ...card, flipped: !card.flipped } : card))
    );
  };

  const moveCard = (
    id: string,
    fromHand: Card[],
    setFromHand: React.Dispatch<React.SetStateAction<Card[]>>,
    toHand: Card[],
    setToHand: React.Dispatch<React.SetStateAction<Card[]>>
  ) => {
    const cardToMove = fromHand.find((card) => card.id === id);
    if (cardToMove) {
      setFromHand(fromHand.filter((card) => card.id !== id));
      setToHand([...toHand, cardToMove]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Card Game</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Hand
          name="Player 1"
          cards={hand1}
          onCardClick={(id) => toggleFlip(id, hand1, setHand1)}
          onToggleFlip={(id) => toggleFlip(id, hand1, setHand1)}
          onMoveCard={(id) => moveCard(id, hand1, setHand1, hand2, setHand2)}
        />
        <Hand
          name="Player 2"
          cards={hand2}
          onCardClick={(id) => toggleFlip(id, hand2, setHand2)}
          onToggleFlip={(id) => toggleFlip(id, hand2, setHand2)}
          onMoveCard={(id) => moveCard(id, hand2, setHand2, hand1, setHand1)}
        />
      </div>
    </div>
  );
};

export default App;
