let api_key = config.RAPID_DAD_JOKE_API_KEY;
let api_link = config.RAPID_DAD_JOKE_API;
let api_host = config.RAPID_HOST;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "1da92de020msh88608772bd7f708p16ff04jsnc92b20273f45",
//     "X-RapidAPI-Host": "myallies-breaking-news-v1.p.rapidapi.com",
//   },
// };

// fetch("https://myallies-breaking-news-v1.p.rapidapi.com/news/cnn", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1da92de020msh88608772bd7f708p16ff04jsnc92b20273f45",
    "X-RapidAPI-Host": "cycoshas-mouth-talking-app-v1.p.rapidapi.com",
  },
};

fetch(
  "https://cycoshas-mouth-talking-app-v1.p.rapidapi.com/best-mouth-talking-apps/",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
