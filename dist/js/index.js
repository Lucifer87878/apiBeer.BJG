var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ShowInfo() {
    window.open("beer-page.html");
}
const beerURL = "https://api.punkapi.com/v2/beers/random";
let randomBeerData = [];
function getBeer() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(beerURL);
        randomBeerData = yield response.json();
        showRandomBeer();
    });
}
;
const img_wrap = document.querySelector(".img-wrap");
const BeerName = document.querySelector(".Beer-Name");
const BpImgWrap = document.querySelector(".bp__img-wrap");
const BpTxtWrap = document.querySelector(".bp__txt-wrap");
const BeerBtn = document.querySelector(".beer__btn");
function showRandomBeer() {
    randomBeerData.forEach(element => {
        let img = document.createElement("img");
        img.setAttribute("src", element.image_url);
        img_wrap.appendChild(img);
        BeerName.innerHTML = element.name;
        let BpImg = document.createElement("img");
        BpImg.setAttribute("src", element.image_url);
        BpImgWrap.appendChild(BpImg);
    });
}
// async function getBeer() {
//     try 
//     {
//         const response = await fetch(beerURL);
//         console.log(response);
//         if (response.status === 200) {
//             randomBeerData = await response.json();
//             };
//     } catch (error) {
//         console.log('Error fetching data:', error.message);
//     }
// }
getBeer();
/*
                data.forEach(element => {
                console.log(element.name);
                let img = document.createElement("img");
                img.setAttribute("src", element.image_url);
                img_wrap.appendChild(img);
                BeerName.innerHTML = element.name;
*/ 
