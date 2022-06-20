import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

import swCharacters from "./data/characters.json";
import swPlanets from "./data/planets.json";
import swStarships from "./data/starships.json";



export default function App() {
const temp = swCharacters.concat(swPlanets);
const arr = temp.concat(swStarships);
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const [sel, setSel] = useState({});
  const handleSetSelector = (value) => {
    const found = arr.find(obj => {
      return obj.name == value;
    });
    Object.keys(found).map((ke) => {
      console.log(`${ke}: ${found[ke]}`);
    })
     setSel(found);
     //console.log(found);
  }
  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleSetSelector }}>
      <Header fan={fan} />
      <hr />
      <Content selectValue={sel}/>
      <Footer />
    </DefaultContext.Provider>
  );
}
