import React, { useState } from 'react';
import Deck from './Deck';
import Hand from './Hand';
import PlayableArea from './PlayableArea';

interface Card {
  id: string;
  message: string;
  flipped: boolean;
  image?: string;
}

const App: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([
    { id: 'c1', message: 'Ace of Spades', flipped: false, image: '/cards/ace_of_spades.png' },
    { id: 'c2', message: 'King of Hearts', flipped: false, image: '/cards/king_of_hearts.png' },
    { id: 'c3', message: 'Queen of Diamonds', flipped: false, image: '/cards/queen_of_diamonds.png' },
    { id: 'c4', message: 'Jack of Clubs', flipped: false, image: '/cards/jack_of_clubs.png' },
  ]);

  const [hand1, setHand1] = useState<Card[]>([]);
  const [playableArea, setPlayableArea] = useState<Card[]>([]);
  const [deckHistory, setDeckHistory] = useState<string[]>([]);
  const [playHistory, setPlayHistory] = useState<string[]>([]);

  const drawCard = () => {
    if (deck.length > 0) {
      const [drawnCard, ...remainingDeck] = deck;
      setDeck(remainingDeck);
      setHand1([...hand1, drawnCard]);
      setDeckHistory([...deckHistory, `Drew ${drawnCard.message}`]);
    }
  };

  const playCard = (id: string) => {
    const cardToPlay = hand1.find((card) => card.id === id);
    if (cardToPlay) {
      setHand1(hand1.filter((card) => card.id !== id));
      setPlayableArea([...playableArea, cardToPlay]);
      setPlayHistory([...playHistory, `Played ${cardToPlay.message}`]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Card Game</h1>
      <Deck onDrawCard={drawCard} history={deckHistory} />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Hand
          name="Player 1"
          cards={hand1}
          onCardClick={playCard}
          onToggleFlip={(id) =>
            setHand1(
              hand1.map((card) =>
                card.id === id ? { ...card, flipped: !card.flipped } : card
              )
            )
          }
          onMoveCard={() => {} /* This can be used for other interactions */}
        />
      </div>
      <PlayableArea cards={playableArea} onCardPlay={() => {}} history={playHistory} />
    </div>
  );
};

export default App;
