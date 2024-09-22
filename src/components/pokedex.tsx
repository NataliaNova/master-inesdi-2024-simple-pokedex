import c from "classnames";
import { useTheme } from "contexts/use-theme";
import { usePokemon, usePokemonList, useTextTransition } from "hooks";
import { useState } from "react";
import { randomMode } from "utils/random";
import Button from "./button";
import { LedDisplay } from "./led-display";
import { typeEffectiveness } from "../hooks/effectiveness";

import "./pokedex.css";



export function Pokedex() {
  const { theme } = useTheme();
  const { ready, resetTransition } = useTextTransition();
  const { pokemonList } = usePokemonList();
  const [i, setI] = useState(0);
  const { pokemon: selectedPokemon } = usePokemon(pokemonList[i]);
  const { pokemon: nextPokemon } = usePokemon(pokemonList[i + 1]);
  const [selectedPokemons, setSelectedPokemons] = useState<any[]>([]);
  

  const prev = () => {
    resetTransition();
    if (i === 0) {
      setI(pokemonList.length - 1);
    }
    setI((i) => i - 1);
  };

  const next = () => {
    resetTransition();
    if (i === pokemonList.length - 1) {
      setI(0);
    }
    setI((i) => i + 1);
  };

  const togglePokemonSelection = (pokemon: any) => {
    setSelectedPokemons((prevSelected) => {
      if (prevSelected.includes(pokemon)) {
        return prevSelected.filter((p) => p !== pokemon);
      } else if (prevSelected.length < 6) {
        return [...prevSelected, pokemon];
      } else {
        return prevSelected;
      }
    });
  };

  return (
    <div className={c("pokedex", `pokedex-${theme}`)}>
      <div className="panel left-panel">
        <div className="screen main-screen">
          {selectedPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />
          )}
        </div>
        <div className="screen name-display">
          <div
            className={c(
              "name",
              "obfuscated",
              ready && "ready",
              ready && `ready--${randomMode()}`
            )}
          >
            {selectedPokemon?.name}
          </div>
        </div>
         <div className="pokemon-types">
          {selectedPokemon?.types.map((typeInfo) => (
            <span key={typeInfo.type.name} className={`type-badge type-${typeInfo.type.name}`}
            title={typeEffectiveness[typeInfo.type.name] || "No effectiveness data available"}
            >
            {typeInfo.type.name}
            </span>
          ))}
        </div>
        <Button 
          label={selectedPokemons.includes(selectedPokemon) ? "Deselect" : "Select"} 
          onClick={() => togglePokemonSelection(selectedPokemon)}
          className={selectedPokemons.includes(selectedPokemon) ? "button button-deselect" : "button button-select"}
        >
          {selectedPokemons.includes(selectedPokemon) ? "Deselect" : "Select"}
        </Button>
      </div>
      <div className="panel right-panel">
        <div className="controls leds">
          <LedDisplay color="blue" />
          <LedDisplay color="red" />
          <LedDisplay color="yellow" />
        </div>
        <div className="screen second-screen">
          {nextPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={nextPokemon.sprites.front_default}
              alt={nextPokemon.name}
            />
          )}
        </div>
        <div className="controls">
          <Button label="prev" onClick={prev} className="button button-prev">prev</Button>
          <Button label="next" onClick={next} className="button button-next">next</Button>
          
        </div>
        <div className="selected-pokemons">
            <h3>Selected Pokémons:</h3>
            <ul>
              {selectedPokemons.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
}
