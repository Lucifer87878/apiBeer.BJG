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
const BeerBox = document.querySelector(".Beer-box");
const SeeMoreWrap = document.querySelector(".modal");
const BeerBtn = document.querySelector(".beer__btn");
const BtnMoreInfo = document.querySelector(".btn-more-info");
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
    //hide modal
    SeeMoreWrap.classList.add("hidden");
    // Clear previous content
    SeeMoreWrap.innerHTML = '';
    // Remove previous image if exists
    let existingImg = img_wrap.querySelector("img");
    if (existingImg) {
        existingImg.remove();
    }
    let img = document.createElement("img");
    img.setAttribute("src", randomBeerData.image_url);
    img_wrap.appendChild(img);
    BeerName.innerHTML = randomBeerData.name;
    let tagline = document.createElement("p");
    tagline.innerText = randomBeerData.tagline;
    SeeMoreWrap.append(tagline);
    let description = document.createElement("p");
    description.innerText = randomBeerData.description;
    SeeMoreWrap.append(description);
    if (randomBeerData.ingredients.hops) {
        randomBeerData.ingredients.hops.forEach(hopsingredients => {
            let hopsingredientInfo = document.createElement("p");
            hopsingredientInfo.innerText = `${hopsingredients.name}: ${hopsingredients.amount.value} ${hopsingredients.amount.unit}, Add: ${hopsingredients.add}, Attribute: ${hopsingredients.attribute}`;
            SeeMoreWrap.append(hopsingredientInfo);
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
BeerBtn.addEventListener('click', getBeer);
getBeer();
// Hantera modal
BtnMoreInfo.addEventListener("click", () => {
    SeeMoreWrap.classList.remove("hidden");
    BeerBox.classList.add("hidden");
});
