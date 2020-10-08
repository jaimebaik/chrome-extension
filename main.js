//grab main tag
let mainNode = document.querySelector("main");
let APIdata;
changePublisher();

  let image = document.createElement('img');
  let imageLink = "https://assets.teenvogue.com/photos/5dae2cb156a2b0000860086a/16:9/w_2560%2Cc_limit/Pol_Fake-News_10-21_PROMO.jpg";
  image.setAttribute('src', imageLink);
  image.setAttribute('id', 'news-gif');
  //image.addEventListener('click', changeToRandom);
  //change the style of image
  image.setAttribute('style', "width: 100%");
  mainNode.prepend(image);

//API call and promises
fetch('https://api.giphy.com/v1/gifs/search?api_key=FrywqnDisisLRkoqGAL4rYImXBKHJLFW&q=fake news&limit=100&offset=0&rating=g&lang=en')
.then((data) => data.json())
.then((data) => {
  APIdata = data['data'];
  console.log(APIdata[0]['images']['original']['url']);
  let randomNum = Math.floor(Math.random()*APIdata.length);
  //create & prepend image
  let image = document.querySelector('#news-gif');
  // let imageLink = APIdata[randomNum]['images']['original']['url'];
  // image.setAttribute('src', imageLink);
  // image.setAttribute('id', 'news-gif');
  image.addEventListener('click', changeToRandom);
  // //change the style of image
  // image.setAttribute('style', "width: 100%");
  // mainNode.prepend(image);
 
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
    if(!publisher.innerText.includes('Fox')){

      publisher.innerText += " Fake News";
    }
    else{
      publisher.style.color = "red";
      publisher.style.fontWeight = "bold";
      publisher.parentNode.parentNode.parentNode.style.border = "1px solid red";
      publisher.parentNode.parentNode.parentNode.style.background = "url('https://d279m997dpfwgl.cloudfront.net/wp/2019/07/AP_19201004713022-1000x667.jpg') no-repeat top right";
      publisher.parentNode.parentNode.parentNode.style.backgroundSize = "50px auto";

    }
  }
  
}