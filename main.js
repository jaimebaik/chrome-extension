//grab main tag
let mainNode = document.querySelector("main");
let APIdata;
changePublisher();

//API call and promises
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
// .then(changePublisher);


function changeToRandom(){
  //new random number
  let randomNum = Math.floor(Math.random()*APIdata.length);
  //select the img
  let randomImg = document.querySelector('#news-gif');
  //change the src of the img
  let imageSrc = APIdata[randomNum]['images']['original']['url'];
  randomImg.setAttribute('src', imageSrc);
}

function changePublisher(){
  console.log("the change publisher function is running")
  //select article
  let article = document.querySelectorAll('article');
  //loop through article
  for (let i=0; i<article.length; i++){
    //get its children (3) (0) (2), step by step to catch errors
    let publisherGrandfather = article[i].children[3] 
    if (!publisherGrandfather) {
      //change 
      publisherGrandfather = article[i].children[2];
    }
    let publisherMother = publisherGrandfather.children[0];
    let publisher = publisherMother.children[2];
    if (publisher === 'undefined') {
      publisher = article[i].children[2].children[0].children[2];
    }
    //change innerText inside
    publisher.innerText += " Fake News"
  }
  
}