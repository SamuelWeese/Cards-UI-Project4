# User_Interface_Project_4
Sam Weese

## 1. Description of the project
I graduate college on Saturday. For the past 3 and a half years, I have made friends, worked with, and enjoyed "hanging" with my peers at college. All of that may go away from me this coming Sunday. 


Dr. Aurisano and I discussed this reality earlier in the semester. The time after college can be isolating, as the natural bonds and stages of life that my friends and I are at are about to rapidly diverge. One of the ways which this can be helped, however, is to have some form of recurring game.


I personally play Poker, and I have friends who do as well. We used to play poker every Saturday night, with the buy in being pushups. I want to still continue that, however most online poker sites require a financial buy in. So to fight isolation and continue relationships, I am implementing a card library, which I will eventually write a free version of poker in. 

## 2. Design research, data, planning

I started this project by looking at a number of other sites, including [PokerStars](https://www.pokerstars.bet/?&no_redirect=1), [Cards and Castles](https://store.steampowered.com/app/360730/Cards_and_Castles/) (which I helped develop previously) and [Cards and Castles 2](https://play.google.com/store/apps/details?id=com.cardsandcastles2.game&hl=en_US), and [Card Games.io](https://cardgames.io/). I analyzed what I liked and didn't like with each of them.

### Poker Stars

The site displays a gambling table. Each player is represented by a pair of cards, and a stack icon with a number indicating chip count. The hand itself is a fixed size, and it displays two cards. Both are in essensse a png. To make actions, such as bet, bid, etc. there are buttons underneath the cards.


I personally don't like the table asthetic. I want it instead to be a clean feeling, where it doesn't feel like a casino. I do like seeing other players hands and amount. I don't think that the poker table encompasses all the interactions. You can't reorder your cards, and I dislike that. I think the buttons make things interesting, however. 


There is no central play area except to display cards.


### Cards and Castles

This displays cards fanning out in the hand. I dislike that you can't see the whole card without hovering on it, and it would be a cool option to have it spread. Playing cards is done via drag and drop. I do like that, but I think that that would take a lot of work. I'll add that in the future.

### Card Games.io

This is a site with tons of card games. I like that the cards show nicely and stack on each other to have a compressed area, but the site only supports traditional card games. I think I want my cards to do more than just this!

### Take Aways

1. I don't want this library to tie 1 component to another component. A player should have a hand, and a hand should have cards, but the type of cards, where the cards can go, what they can do should all be library agnostic.

2. I want the deck to display a card, and the play area to display cards.

3. I want cards to have unlimited additional functionality, and hotkeys. So hovering over a card and then clicking a hot key should execute some form of lambda function upon it.

### Hand

This should be a set of cards displayed to only one user. Realistically, it should be seen as the back of cards by other players, but that is for the future and networking.

### Deck

This can just be a card, which upon clicking removes a card from que of the deck.

### Play Area

This should be agnostic, and not really implemented. A simple, overridable one would just be playing cards onto a deck.

## Implementation of this application 

I implemented this all in a single folder, `src`. I have the website serve only the display area, as an example of an implementation. Each file is structured by the following:

```
imports
- this is all files which we might need from other areas

prop object
- this is any form of data structure we might have created in this file. Examples include the card, hand, deck, and play area.

prop object interface return
- this is a function which in essense acts as a constructor for the prop object UI. This is what is actually drawn.

exports
- this is any data we might want to use elsewhere
```

## Use of AI
- I used chatgpt to start this project! [Here is the first pass.](https://chatgpt.com/c/6753d097-a5d8-800f-a139-a3a677589a56)

# Future work

Obviously the work is never finished. Specifically I want to add the following features:
- Peer to Peer networking for multiplayer play
- Non-react implementation (for speed)
- Adding hover over clicking
  
## [Demo Video](https://uc.mediaspace.kaltura.com/media/1_dppu1sc6)
