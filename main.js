//grab main tag
let mainNode = document.querySelector("main");
let APIdata;

fetch('https://api.giphy.com/v1/gifs/search?api_key=FrywqnDisisLRkoqGAL4rYImXBKHJLFW&q=fake news&limit=100&offset=0&rating=g&lang=en')
.then((data) => data.json())
.then((data) => {
  APIdata = data['data'];
  console.log(APIdata[0]['images']['original']['url']);
  let randomNum = Math.floor(Math.random()*APIdata.length);
  //create & prepend image
  let image = document.createElement('img');
  let imageLink = APIdata[randomNum]['images']['original']['url'];
  image.setAttribute('src', imageLink);
  image.setAttribute('id', 'news-gif');
  image.addEventListener('click', changeToRandom);
  //change the style of image
  image.setAttribute('style', "width: 100%");
  mainNode.prepend(image);
})

function changeToRandom(){
  //new random number
  let randomNum = Math.floor(Math.random()*APIdata.length);
  //select the img
  let randomImg = document.querySelector('#news-gif');
  //change the src of the img
  let imageSrc = APIdata[randomNum]['images']['original']['url'];
  randomImg.setAttribute('src', imageSrc);
}