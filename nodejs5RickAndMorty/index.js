const {
  getCharacters,
  getEpisodes,
  getCharacterId,
  getEpisodeId,
} = require("./service");

let CharactersOrEpisodes = process.argv[2];
let id = process.argv[3];


if (CharactersOrEpisodes === 'characters') {
  if (id) {getCharacterId(id)
  } else {getCharacters()
  }
} else if (CharactersOrEpisodes === 'episodes') {
  if (id) {getEpisodeId(id)
  } else {getEpisodes()
  }
}