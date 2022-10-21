import React from "react";


export function MemoryCard({ img, name, changeLastCardClicked }) {
  return (
    <div className="memoryCard" onClick={(e) => changeLastCardClicked(name)} >
      <img src={img} alt="" className="pokemonImg"/>
      <h2 className="pokemonName" > {name} </h2>
    </div>
  );
}