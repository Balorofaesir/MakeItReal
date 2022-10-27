const axios = require("axios");

function getEpisodes() {
  axios
    .get("https://rickandmortyapi.com/api/episode")
    .then(function (response) {
      let data = response.data.results;
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].name);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function getCharacters() {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(function (response) {
      let data = response.data.results;
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].name);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function getCharacterEpisodes(id) {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(function (response) {
      let data = response.data.results;
      for (let index = 0; index < data.length; index++) {
        if (id === data[index].name) {
          let data2 = data[index].episode;
          let data3 = [];
          data2.forEach((element) => {
            data3.push(element.slice(-10));
          });
          console.log(id, "is in the following episodes:", data3);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function getEpisodeCharacters(id) {
  axios
    .get("https://rickandmortyapi.com/api/episode")
    .then(function (response) {
      let data = response.data.results;
      for (let index = 0; index < data.length; index++) {
        if (id === data[index].name) {
          let data2 = data[index].characters
          let data3 = [];
          data2.forEach((element) => {
            data3.push(element.replace(/\D/g, ''));
          });
          console.log(data3);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = {
  getCharacters,
  getEpisodes,
  getCharacterEpisodes,
  getEpisodeCharacters,
};
// if (
//   CharactersOrEpisodes == !"getCharacters" &&
//   CharactersOrEpisodes == !"getEpisodes" &&
//   CharactersOrEpisodes == !"getCharacterEpisodes" &&
//   CharactersOrEpisodes == !"getEpisodeCharacters"
// ) {
//   console.log(error);
// } else