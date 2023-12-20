interface Exempel {
    id: number,
    name: string,
    tagline: string,
    image_url: string | null,
    description: string,
    hops: string,
    AlcoholByVolume: string,
    VolumeABV: number,
    Ingredients:string,
    FoodPairing:string,
    BrewersTips:string,
}

function ShowInfo() 
{
    window.open ("beer-page.html");
}

const beerURL ="https://api.punkapi.com/v2/beers/random";

let randomBeerData: Exempel[] = []; 

    async function getBeer() 
    {    
        let response = await fetch(beerURL);        
            randomBeerData = await response.json();
            showRandomBeer();
            };

const img_wrap = document.querySelector(".img-wrap") as HTMLElement;
const BeerName = document.querySelector(".Beer-Name") as HTMLElement;

const BpImgWrap = document.querySelector(".bp__img-wrap") as HTMLElement;
const BpTxtWrap = document.querySelector(".bp__txt-wrap") as HTMLElement;
const BeerBtn = document.querySelector(".beer__btn") as HTMLElement;

function showRandomBeer () 
{
        randomBeerData.forEach(element => 
        {        
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

// test