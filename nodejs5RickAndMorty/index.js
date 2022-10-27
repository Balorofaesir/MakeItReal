const {
  getCharacters,
  getEpisodes,
  getCharacterEpisodes,
  getEpisodeCharacters,
} = require("./service");

let CharactersOrEpisodes = process.argv[2];
let id = process.argv[3];


 if (CharactersOrEpisodes === "getCharacters") {
  getCharacters();
} else if (CharactersOrEpisodes === "getEpisodes") {
  getEpisodes();
} else if (CharactersOrEpisodes === "getCharacterEpisodes") {
  getCharacterEpisodes(id);
} else if (CharactersOrEpisodes === "getEpisodeCharacters") {
    getEpisodeCharacters(id);
}
