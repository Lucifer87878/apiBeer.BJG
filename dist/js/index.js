var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const beerURL = "https://api.punkapi.com/v2/beers/random";
let randomBeerData = {};
const img_wrap = document.querySelector(".img-wrap");
const BeerName = document.querySelector(".Beer-Name");
const SeeMoreWrap = document.querySelector(".see-more-wrap");
const BeerBtn = document.querySelector(".beer__btn");
function getBeer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(beerURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            [randomBeerData] = yield response.json(); // Use array destructuring to get the first element
            showRandomBeer();
        }
        catch (error) {
            console.error('Error fetching beer data:', error);
        }
    });
}
function showRandomBeer() {
    // Clear previous content
    SeeMoreWrap.innerHTML = '';
    // Remove previous image if exists
    let existingImg = img_wrap.querySelector("img");
    if (existingImg) {
        existingImg.remove();
    }
    let img = document.createElement("img");
    img.setAttribute("src", randomBeerData.image_url || ''); // Use randomBeerData.image_url, handle null case
    img_wrap.appendChild(img);
    BeerName.innerHTML = randomBeerData.name;
    let tagline = document.createElement("p");
    tagline.innerText = randomBeerData.tagline;
    SeeMoreWrap.append(tagline);
    let description = document.createElement("p");
    description.innerText = randomBeerData.description;
    SeeMoreWrap.append(description);
    // Display hops information
    if (randomBeerData.ingredients.hops) {
        randomBeerData.ingredients.hops.forEach(hop => {
            let hopInfo = document.createElement("p");
            hopInfo.innerText = `${hop.name}: ${hop.amount.value} ${hop.amount.unit}, Add: ${hop.add}, Attribute: ${hop.attribute}`;
            SeeMoreWrap.append(hopInfo);
        });
    }
    let abv = document.createElement("p");
    abv.innerText = `ABV: ${randomBeerData.abv}`;
    SeeMoreWrap.append(abv);
    let volume = document.createElement("p");
    volume.innerText = `Volume: ${randomBeerData.volume.value} ${randomBeerData.volume.unit}`;
    SeeMoreWrap.append(volume);
    let ingredients = document.createElement("p");
    ingredients.innerText = `Ingredients: ${randomBeerData.ingredients.malt.map(malt => malt.name).join(', ')}, Yeast: ${randomBeerData.ingredients.yeast}`;
    SeeMoreWrap.append(ingredients);
    let foodPairing = document.createElement("p");
    foodPairing.innerText = `Food Pairing: ${randomBeerData.food_pairing.join(', ')}`;
    SeeMoreWrap.append(foodPairing);
    let brewersTips = document.createElement("p");
    brewersTips.innerText = `Brewer's Tips: ${randomBeerData.brewers_tips}`;
    SeeMoreWrap.append(brewersTips);
}
// Add event listener outside the loop
BeerBtn.addEventListener('click', getBeer);
// Fetch beer data on page load
getBeer();
//-----------------------------------------------------------gammal kod-------------------------------//
// interface Exempel {
//     id: number,
//     name: string,
//     tagline: string,
//     image_url: string | null,
//     description: string,
//     hops: string,
//     abv: number,
//     volume: number,
//     ingredients: string,
//     foodPairing: string,
//     brewersTips: string,
// }
// function ShowInfo() 
// {
//     window.open ("beer-page.html");
// }
// const beerURL ="https://api.punkapi.com/v2/beers/random";
// let randomBeerData: Exempel[] = []; 
//     async function getBeer() 
//     {    
//         let response = await fetch(beerURL);        
//             randomBeerData = await response.json();
//             showRandomBeer();
//             };
// const img_wrap = document.querySelector(".img-wrap") as HTMLElement;
// const BeerName = document.querySelector(".Beer-Name") as HTMLElement;
// const SeeMoreWrap = document.querySelector(".see-more-wrap") as HTMLElement;
// const BeerBtn = document.querySelector(".beer__btn") as HTMLElement;
// function showRandomBeer () 
// {
//         randomBeerData.forEach(element => 
//         {        
//         let img = document.createElement("img");
//         img.setAttribute("src", element.image_url);
//         img_wrap.appendChild(img);
//         BeerName.innerHTML = element.name;
//         BeerBtn.addEventListener('click', () => {
//             let tagline = document.createElement("p");
//             tagline.innerText = element.tagline;
//             SeeMoreWrap.append(tagline);
//             let description = document.createElement("p");
//             description.innerText = element.description;
//             SeeMoreWrap.append(description);
//             let hops = document.createElement("p");
//             hops.innerText = element.hops;
//             SeeMoreWrap.append(hops)
//             let abv = document.createElement("p");
//             abv.innerText = element.abv.toString();
//             SeeMoreWrap.append(abv)
//             let volume = document.createElement("p");
//             volume.innerText = element.volume.toString();
//             SeeMoreWrap.append(volume);
//             let ingredients = document.createElement("p");
//             ingredients.innerText = element.ingredients;
//             SeeMoreWrap.append(ingredients);
//             let foodPairing = document.createElement("p");
//             foodPairing.innerText = element.foodPairing;
//             SeeMoreWrap.append(foodPairing);
//             let brewersTips = document.createElement("p");
//             brewersTips.innerText = element.brewersTips;
//             SeeMoreWrap.append(brewersTips);
//         })
//     });
// }     
// getBeer();
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
/*
                data.forEach(element => {
                console.log(element.name);
                let img = document.createElement("img");
                img.setAttribute("src", element.image_url);
                img_wrap.appendChild(img);
                BeerName.innerHTML = element.name;
                */
// // Anta att element.hops är en array, t.ex. ["Hop1", "Hop2", "Hop3"]
// let hopsArray = element.hops;
// // Omvandla arrayen till en sträng med kommaseparerade värden
// let hopsString = hopsArray.join(', ');
// // Skapa ett nytt <p> element
// let hops = document.createElement("p");
// // Tilldela strängen till innerText
// hops.innerText = hopsString;
// // Lägg till <p> elementet till din DOM
// SeeMoreWrap.append(hops);
// test
