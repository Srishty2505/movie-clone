const API_KEY = "8125db8f67d23da1d30f6063b1b794b8";
const base_url = "https://api.themoviedb.org/3/";
var img_base_path = "https://image.tmdb.org/t/p/original"

var movieWrapper = document.querySelector(".movieWrapper");
var movieWrapper1 = document.querySelector(".movieWrapper1");
var movieWrapper2 = document.querySelector(".movieWrapper2");

var options = document.querySelectorAll(".movieContainer input[type=radio]");
var options1 = document.querySelectorAll(".movieContainer1 input[type=radio]");
var options2 = document.querySelectorAll(".movieContainer2 input[type=radio]");


// var obj = {
//   day: "trending/movie/day?language=en-US&api_key=" + API_KEY,
//   week: "trending/movie/week?language=en-US&api_key=" + API_KEY,
// };

var obj = {
  day: `trending/movie/day?language=en-US&api_key=${API_KEY}`,
  week: `trending/movie/week?language=en-US&api_key=${API_KEY}`,
};

var topRated = {
  movie: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  tv: `tv/top_rated?api_key=${API_KEY}&language=en-US`,
}
var popular = {
  movie: `movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
  tv: `tv/popular?language=en-US&page=1&api_key=${API_KEY}`,
}

var promises = [];
var finalData;

for (let x in obj) {
  promises.push(getDataFromAPI(base_url + obj[x]));
}
console.log(promises);

async function resolvePromises() {
  finalData = await Promise.all(promises);
  console.log(finalData);
  showData(finalData[0]);
}

resolvePromises();

async function getDataFromAPI(url) {
  var response = await fetch(url);
  var result = await response.json();
  return result;
}


function showData(data) {
  console.log(data)
  let content = document.createElement("div")
  data.results.forEach((obj) => {
    var moviediv = document.createElement("div")
    moviediv.classList.add("movie");
    var poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src = img_base_path + obj.poster_path;
    var title = document.createElement("h2")
    title.innerHTML =
      obj.title || obj.original_title || obj.name || obj.original_name
    moviediv.appendChild(poster, title)
    content.append(moviediv)
  });
  movieWrapper.innerHTML = ""
  movieWrapper.append(content)
}

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.target.checked
      ? e.target.value === "day"
        ? showData(finalData[0])
        : showData(finalData[1])
      : ""
  })
})

var promises1 = [];
var finalData1;

for (let i in topRated) {
  promises1.push(getDataFromAPI(base_url + topRated[i]));
}
console.log(promises1);

async function resolvePromises1() {
  finalData1 = await Promise.all(promises1);
  console.log(finalData1);
  showData1(finalData1[0]);
}
resolvePromises1();

async function getDataFromAPI(url) {
  var response = await fetch(url);
  var result = await response.json();
  return result;
}

function showData1(data) {
  console.log(data)
  let content1 = document.createElement("div")
  data.results.forEach((topRated) => {
    var moviediv1 = document.createElement("div")
    moviediv1.classList.add("movie");
    var poster1 = document.createElement("img")
    poster1.classList.add("poster")
    poster1.src = img_base_path + topRated.poster_path;
    var title1 = document.createElement("h2")
    title1.innerHTML =
      topRated.title || topRated.original_title || topRated.name || topRated.original_name
    moviediv1.appendChild(poster1, title1)
    content1.append(moviediv1)
  });
  movieWrapper1.innerHTML = ""
  movieWrapper1.append(content1)
}

options1.forEach((option1) => {
  option1.addEventListener("click", (e) => {
    e.target.checked
      ? e.target.value === "movie"
        ? showData1(finalData1[0])
        : showData1(finalData1[1])
      : ""
  })
})


var promises2 = [];
var finalData2;

for (let j in popular) {
  promises2.push(getDataFromAPI(base_url + popular[j]));
}
console.log(promises2);

async function resolvePromises2() {
  finalData2 = await Promise.all(promises2);
  console.log(finalData2);
  showData2(finalData2[0]);
}
resolvePromises2();

async function getDataFromAPI(url) {
  var response = await fetch(url);
  var result = await response.json();
  return result;
}

function showData2(data) {
  console.log(data)
  let content2 = document.createElement("div")
  data.results.forEach((popular) => {
    var moviediv2 = document.createElement("div")
    moviediv2.classList.add("movie");
    var poster2 = document.createElement("img")
    poster2.classList.add("poster")
    poster2.src = img_base_path + popular.poster_path;
    var title2 = document.createElement("h2")
    title2.innerHTML =
      popular.title || popular.original_title || popular.name || popular.original_name
    moviediv2.appendChild(poster2, title2)
    content2.append(moviediv2)
  });
  movieWrapper2.innerHTML = ""
  movieWrapper2.append(content2)
}

options2.forEach((option2) => {
  option2.addEventListener("click", (e) => {
    e.target.checked
      ? e.target.value === "movie"
        ? showData2(finalData2[0])
        : showData2(finalData2[1])
      : ""
  })
})

