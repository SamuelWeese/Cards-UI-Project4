import React, { useState } from 'react';
import Deck from './Deck';
import Hand from './Hand';
import PlayableArea from './PlayableArea';

interface Card {
  id: string;
  message: string;
  flipped: boolean;
  tapped: boolean;
  image?: string;
}

const App: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([

  { id: 'c2', message: '2 of Clubs', flipped: false, tapped: false, image: '/cards/2_of_clubs.png' },
  { id: 'c3', message: '3 of Clubs', flipped: false, tapped: false, image: '/cards/3_of_clubs.png' },
  { id: 'c4', message: '4 of Clubs', flipped: false, tapped: false, image: '/cards/4_of_clubs.png' },
  { id: 'c5', message: '5 of Clubs', flipped: false, tapped: false, image: '/cards/5_of_clubs.png' },
  { id: 'c6', message: '6 of Clubs', flipped: false, tapped: false, image: '/cards/6_of_clubs.png' },
  { id: 'c7', message: '7 of Clubs', flipped: false, tapped: false, image: '/cards/7_of_clubs.png' },
  { id: 'c8', message: '8 of Clubs', flipped: false, tapped: false, image: '/cards/8_of_clubs.png' },
  { id: 'c9', message: '9 of Clubs', flipped: false, tapped: false, image: '/cards/9_of_clubs.png' },
  { id: 'c10', message: '10 of Clubs', flipped: false, tapped: false, image: '/cards/10_of_clubs.png' },
  { id: 'cj', message: 'Jack of Clubs', flipped: false, tapped: false, image: '/cards/jack_of_clubs.png' },
  { id: 'cq', message: 'Queen of Clubs', flipped: false, tapped: false, image: '/cards/queen_of_clubs.png' },
  { id: 'ck', message: 'King of Clubs', flipped: false, tapped: false, image: '/cards/king_of_clubs.png' },
  { id: 'ca', message: 'Ace of Clubs', flipped: false, tapped: false, image: '/cards/ace_of_clubs.png' },
  
  { id: 'h2', message: '2 of Hearts', flipped: false, tapped: false, image: '/cards/2_of_hearts.png' },
  { id: 'h3', message: '3 of Hearts', flipped: false, tapped: false, image: '/cards/3_of_hearts.png' },
  { id: 'h4', message: '4 of Hearts', flipped: false, tapped: false, image: '/cards/4_of_hearts.png' },
  { id: 'h5', message: '5 of Hearts', flipped: false, tapped: false, image: '/cards/5_of_hearts.png' },
  { id: 'h6', message: '6 of Hearts', flipped: false, tapped: false, image: '/cards/6_of_hearts.png' },
  { id: 'h7', message: '7 of Hearts', flipped: false, tapped: false, image: '/cards/7_of_hearts.png' },
  { id: 'h8', message: '8 of Hearts', flipped: false, tapped: false, image: '/cards/8_of_hearts.png' },
  { id: 'h9', message: '9 of Hearts', flipped: false, tapped: false, image: '/cards/9_of_hearts.png' },
  { id: 'h10', message: '10 of Hearts', flipped: false, tapped: false, image: '/cards/10_of_hearts.png' },
  { id: 'hj', message: 'Jack of Hearts', flipped: false, tapped: false, image: '/cards/jack_of_hearts.png' },
  { id: 'hq', message: 'Queen of Hearts', flipped: false, tapped: false, image: '/cards/queen_of_hearts.png' },
  { id: 'hk', message: 'King of Hearts', flipped: false, tapped: false, image: '/cards/king_of_hearts.png' },
  { id: 'ha', message: 'Ace of Hearts', flipped: false, tapped: false, image: '/cards/ace_of_hearts.png' },

  { id: 'd2', message: '2 of Diamonds', flipped: false, tapped: false, image: '/cards/2_of_diamonds.png' },
  { id: 'd3', message: '3 of Diamonds', flipped: false, tapped: false, image: '/cards/3_of_diamonds.png' },
  { id: 'd4', message: '4 of Diamonds', flipped: false, tapped: false, image: '/cards/4_of_diamonds.png' },
  { id: 'd5', message: '5 of Diamonds', flipped: false, tapped: false, image: '/cards/5_of_diamonds.png' },
  { id: 'd6', message: '6 of Diamonds', flipped: false, tapped: false, image: '/cards/6_of_diamonds.png' },
  { id: 'd7', message: '7 of Diamonds', flipped: false, tapped: false, image: '/cards/7_of_diamonds.png' },
  { id: 'd8', message: '8 of Diamonds', flipped: false, tapped: false, image: '/cards/8_of_diamonds.png' },
  { id: 'd9', message: '9 of Diamonds', flipped: false, tapped: false, image: '/cards/9_of_diamonds.png' },
  { id: 'd10', message: '10 of Diamonds', flipped: false, tapped: false, image: '/cards/10_of_diamonds.png' },
  { id: 'dj', message: 'Jack of Diamonds', flipped: false, tapped: false, image: '/cards/jack_of_diamonds.png' },
  { id: 'dq', message: 'Queen of Diamonds', flipped: false, tapped: false, image: '/cards/queen_of_diamonds.png' },
  { id: 'dk', message: 'King of Diamonds', flipped: false, tapped: false, image: '/cards/king_of_diamonds.png' },
  { id: 'da', message: 'Ace of Diamonds', flipped: false, tapped: false, image: '/cards/ace_of_diamonds.png' },

  { id: 's2', message: '2 of Spades', flipped: false, tapped: false, image: '/cards/2_of_spades.png' },
  { id: 's3', message: '3 of Spades', flipped: false, tapped: false, image: '/cards/3_of_spades.png' },
  { id: 's4', message: '4 of Spades', flipped: false, tapped: false, image: '/cards/4_of_spades.png' },
  { id: 's5', message: '5 of Spades', flipped: false, tapped: false, image: '/cards/5_of_spades.png' },
  { id: 's6', message: '6 of Spades', flipped: false, tapped: false, image: '/cards/6_of_spades.png' },
  { id: 's7', message: '7 of Spades', flipped: false, tapped: false, image: '/cards/7_of_spades.png' },
  { id: 's8', message: '8 of Spades', flipped: false, tapped: false, image: '/cards/8_of_spades.png' },
  { id: 's9', message: '9 of Spades', flipped: false, tapped: false, image: '/cards/9_of_spades.png' },
  { id: 's10', message: '10 of Spades', flipped: false, tapped: false, image: '/cards/10_of_spades.png' },
  { id: 'sj', message: 'Jack of Spades', flipped: false, tapped: false, image: '/cards/jack_of_spades.png' },
  { id: 'sq', message: 'Queen of Spades', flipped: false, tapped: false, image: '/cards/queen_of_spades.png' },
  { id: 'sk', message: 'King of Spades', flipped: false, tapped: false, image: '/cards/king_of_spades.png' },
    { id: 'sa', message: 'Ace of Spades', flipped: false, tapped: false, image: '/cards/ace_of_spades.png' },
  ]);

  const [hand1, setHand1] = useState<Card[]>([]);
  const [playableArea, setPlayableArea] = useState<Card[]>([]);
  const [deckHistory, setDeckHistory] = useState<string[]>([]);
  const [playHistory, setPlayHistory] = useState<Card[]>([]);

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
      setPlayHistory([...playHistory, cardToPlay]);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>Card Game Library</h1>
      <h2><a href="https://github.com/SamuelWeese/Cards-UI-Project4">View Source Code</a></h2>
      <Deck onDrawCard={drawCard} history={deckHistory} />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Hand
          name="Player 1"
          cards={hand1}
          onLeftClick={playCard}
          onRightClick={()=>{}}
          onFlip={(id) =>
            setHand1(
              hand1.map((card) =>
                card.id === id ? { ...card, flipped: !card.flipped } : card
              ))}
              onTap={(id) =>
                setHand1(
                  hand1.map((card) =>
                    card.id === id ? { ...card, tapped: !card.tapped } : card
                  )
                )
              }
              onReorderCards={()=>{}}
        />
      </div>
      <PlayableArea history={playHistory} onDrawCard={() => {}} />
    </div>
  );
};

export default App;