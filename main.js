//grab main tag
let mainNode = document.querySelector("main");

//create & prepend image
let image = document.createElement('img');
let imageLink = "https://assets.teenvogue.com/photos/5dae2cb156a2b0000860086a/16:9/w_2560%2Cc_limit/Pol_Fake-News_10-21_PROMO.jpg";
image.setAttribute('src', imageLink);
//change the style of image
image.setAttribute('style', "width: 100%");
mainNode.prepend(image);