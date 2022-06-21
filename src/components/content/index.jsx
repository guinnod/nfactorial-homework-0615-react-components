import { useState } from "react";
import { useEffect } from "react";
import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";



import { ItemSpisok } from "../sw-item-spisok";

import { ItemLists } from "../sw-item-lists";



export const Content = ({selectValue, themV}) => {
  const [first, setF] = useState(true);
  const [selector, setSelector] = useState("Characters");
  const[sec, setS] = useState('#E6E6E6');
  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
   
    setF(false);
  };
  useEffect(()=>{
    if (selectValue.name != undefined) {
    setSelector('');
    setF(true);
    }
  }, [selectValue])
  useEffect(()=>{
    setS(!sec);
  },[themV])
  return (
    <div className="content-layout" style={{backgroundColor: !sec?'':'#E6E6E6'}}>
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
          
         
         
        
        
      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists sxItemText={{color: !sec?'':'black'}} key={character.name} item={character} type="chars">
            <ItemSpisok sxItemText={{color: !sec?'':'black'}}>gender: {character.gender}</ItemSpisok>
            <ItemSpisok sxItemText={{color: !sec?'':'black'}}>birthday: {character.birth_year}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists sxItemText={{color: !sec?'':'black'}} key={planet.name} item={planet} type="planets">
            <ItemSpisok sxItemText={{color: !sec?'':'black'}}>Rotation Period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok sxItemText={{color: !sec?'':'black'}}>Orbital Period: {planet.orbital_period}</ItemSpisok>
          </ItemLists>
        ))}
        {selector === "Starships" &&
        swStarships.map((starship) => (
          <ItemLists sxItemText={{color: !sec?'':'black'}} key={starship.name} item={starship} type="starships">
            <ItemSpisok sxItemText={{color: !sec?'':'black'}}>Cargo Capacity: {starship.cargo_capacity}</ItemSpisok>
            <ItemSpisok sxItemText={{color: !sec?'':'black'}}>Length: {starship.length}</ItemSpisok>
          </ItemLists>
        ))}
         {selectValue.name != undefined && first &&
          <div> <ItemLists sxItemText={{color: !sec?'':'black'}} key={selectValue.name} item={selectValue} type="">
            {Object.keys(selectValue).map((e) => (
              <ItemSpisok  sxItemText={{color: !sec?"":'black !important'}}><div>{e}: {selectValue[e]}</div></ItemSpisok>
            ))
            }
            </ItemLists>
            </div>
          }
          
        
    </div>
  );
};
