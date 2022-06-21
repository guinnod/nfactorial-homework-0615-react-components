//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import {SearchMui} from "../searchmui/SearchMui";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";

import { useContext } from "react";
import { DefaultContext } from "../../Context";


//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = ({ fan }) => {
  const {handleSetTheme} = useContext(DefaultContext);
 const [mode, setMode] = useState(true);
 const handleSetMode = () => {
 handleSetTheme();
  setMode(!mode);
 }
  return (
    <header style={{backgroundColor: mode?'':'#E6E6E6'}}>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <StarWarsLogoSVG sx={{color: 'black'}}/>
      <div className="search-layout">
       <div style={{backgroundColor: 'white', height: '80px', width: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', paddingBottom: '8px'}}>
        {/* <input placeholder="Search Star Wars" type="text" /> */}
        <SearchMui/>
        </div>
        <div style={{ color: mode?"white":'black', paddingTop: "1rem" }}>
          I am fan of: {fan}
        </div>
      {mode&&<div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '80px', marginRight: '10px'}}><LightMode onClick={handleSetMode} style={{color: 'white', width: '50px',height: '50px'}}></LightMode></div>}
        {!mode&&<div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '80px', marginRight: '10px'}}><DarkMode onClick={handleSetMode} style={{color: 'black', width: '50px',height: '50px'}}></DarkMode></div>}
         </div>

    </header>
  );
};
