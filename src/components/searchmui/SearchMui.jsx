import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";


import { useContext } from "react";
import { DefaultContext } from "../../Context";
const temp = swCharacters.concat(swPlanets);
const arr = temp.concat(swStarships);

export const SearchMui = () => {
  const {handleSetSelector} = useContext(DefaultContext);
  return (
    <div style={{ width: 300}}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={arr.map((option)=>(option.name))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
        // onChange={handleSetSelector(value)}
        onChange={(event, value) => handleSetSelector(value)}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top