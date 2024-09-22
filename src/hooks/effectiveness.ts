
type TypeEffectiveness = {
  [key: string]: string;
};

export const typeEffectiveness: TypeEffectiveness = {
    grass: "Weak to Fire, Ice, Poison, Flying, Bug. Strong against Water, Ground, Rock.",
    fire: "Weak to Water, Rock, Fire. Strong against Grass, Ice, Bug, Steel.",
    water: "Weak to Electric, Grass. Strong against Fire, Ground, Rock.",
    bug: "Weak to Fire, Flying, Rock. Strong against Grass, Psychic, Dark.",
    normal: "Weak to Fighting. Strong against Ghost.",
    poison: "Weak to Ground, Psychic. Strong against Grass, Fairy.",
    electric: "Weak to Ground. Strong against Water, Flying.",
    ground: "Weak to Water, Grass, Ice. Strong against Fire, Electric, Poison, Rock, Steel.",
    fairy: "Weak to Poison, Steel. Strong against Fighting, Dragon, Dark.",
    fighting: "Weak to Flying, Psychic, Fairy. Strong against Normal, Ice, Rock, Dark, Steel.",
    psychic: "Weak to Bug, Ghost, Dark. Strong against Fighting, Poison.",
    rock: "Weak to Water, Grass, Fighting, Ground, Steel. Strong against Fire, Ice, Flying, Bug.",
    ghost: "Weak to Ghost, Dark. Strong against Psychic, Ghost.",
    ice: "Weak to Fire, Fighting, Rock, Steel. Strong against Grass, Ground, Flying, Dragon.",
    dragon: "Weak to Ice, Dragon, Fairy. Strong against Dragon.",
    dark: "Weak to Fighting, Bug, Fairy. Strong against Psychic, Ghost.",
    steel: "Weak to Fire, Fighting, Ground. Strong against Ice, Rock, Fairy.",
    flying: "Weak to Electric, Ice, Rock. Strong against Grass, Fighting, Bug.",

    
  }; 


