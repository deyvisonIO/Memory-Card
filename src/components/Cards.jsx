import React, { useEffect, useState } from "react";

import { MemoryCard } from "./MemoryCard";
import { Header } from "./Header";

const cards = [
  {
    img: "./pokemons/aerodactyl.png",
    name: "Aerodactyl"
  },
  {
    img: "./pokemons/blastoise.png",
    name: "Blastoise"
  },
  {
    img: "./pokemons/bulbasaur.png",
    name: "Bulbasaur"
  },
  {
    img: "./pokemons/charizard.png",
    name: "Charizard"
  },
  {
    img: "./pokemons/charmander.png",
    name: "Charmander"
  },
  {
    img: "./pokemons/dragonair.png",
    name: "Dragonair"
  },
  {
    img: "./pokemons/mew.png",
    name: "Mew"
  },
  {
    img: "./pokemons/mewtwo.png",
    name: "Mewtwo"
  },
  {
    img: "./pokemons/pikachu.png",
    name: "Pikachu"
  },
  {
    img: "./pokemons/snorlax.png",
    name: "Snorlax"
  },
  {
    img: "./pokemons/wartortle.png",
    name: "Wartortle"
  },
  {
    img: "./pokemons/zapdos.png",
    name: "Zapdos"
  },
]



export function Cards() {
  const [scoreBoard, setScoreBoard] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [lastCardClicked, setLastCardClicked] = useState('');

  useEffect(() => {
    if(cardsClicked.includes(lastCardClicked) || lastCardClicked === '') {
      if(scoreBoard > bestScore) {
        setBestScore(scoreBoard);
      }
      setScoreBoard(0);
      setCardsClicked([]);
    } else {
      const newCardsClicked = cardsClicked.concat(lastCardClicked);
      setCardsClicked(newCardsClicked);
      setScoreBoard(scoreBoard + 1);
      
    }

    shuffleArray(cards);

  }, [lastCardClicked]);
  
  const changeLastCardClicked = (name) => {
    setLastCardClicked(name)
  }

  const newCards = cards.map(card => 
  <MemoryCard 
    key={card.name} 
    img={card.img} 
    name={card.name} 
    changeLastCardClicked={changeLastCardClicked}
  />
  )

  

  return (
    <div>
      <Header scoreBoard={scoreBoard} bestScore={bestScore} />
      <div className="cards">
        {newCards}
      </div>
    </div>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}