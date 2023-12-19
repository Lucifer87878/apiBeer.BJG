var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const img_wrap = document.querySelector(".img-wrap");
const BeerName = document.querySelector(".Beer-Name");
function ShowInfo(data) {
    console.log(data);
}
const beerURL = "https://api.punkapi.com/v2/beers/random";
function getBeer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(beerURL);
            console.log(response);
            if (response.status === 200) {
                const data = yield response.json();
                ShowInfo(data);
                console.log(data);
                data.forEach(element => {
                    console.log(element.name);
                    let img = document.createElement("img");
                    img.setAttribute("src", element.image_url);
                    img_wrap.appendChild(img);
                    BeerName.innerHTML = element.name;
                });
            }
            else {
                throw Error('Något gick fel, försök igen senare');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
getBeer();
