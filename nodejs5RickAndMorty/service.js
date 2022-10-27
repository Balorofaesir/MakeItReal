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

function getCharacterId(id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
      let data = response.data;
      console.log(data)
    })
    .catch(function (error) {
      console.error(error);
    });
}
function getEpisodeId(id) {
  axios
    .get(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(function (response) {
      let data = response.data;
      console.log(data)
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = {
  getCharacters,
  getEpisodes,
  getCharacterId,
  getEpisodeId,
};
