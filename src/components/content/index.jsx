import { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";



import { ItemSpisok } from "../sw-item-spisok";

import { ItemLists } from "../sw-item-lists";



export const Content = ({selectValue}) => {
  const [selector, setSelector] = useState("Characters");
  const temp = swCharacters.concat(swPlanets);
  const arr = temp.concat(swStarships);
  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };
  
  return (
    <div className="content-layout">
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>
          
         
          {
            Object.keys(selectValue).map((e) => (
              <h1 style={{color: 'white'}}>{e}: {selectValue[e]}</h1>
            ))
          }
          
        
        
      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists key={character.name} item={character} type="chars">
            <ItemSpisok>gender: {character.gender}</ItemSpisok>
            <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists key={planet.name} item={planet} type="planets">
            <ItemSpisok>Rotation Period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok>Orbital Period: {planet.orbital_period}</ItemSpisok>
          </ItemLists>
        ))}
        {selector === "Starships" &&
        swStarships.map((starship) => (
          <ItemLists key={starship.name} item={starship} type="starships">
            <ItemSpisok>Cargo Capacity: {starship.cargo_capacity}</ItemSpisok>
            <ItemSpisok>Length: {starship.length}</ItemSpisok>
          </ItemLists>
        ))}
        
        
    </div>
  );
};
