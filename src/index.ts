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

const img_wrap = document.querySelector(".img-wrap") as HTMLElement;
const BeerName = document.querySelector(".Beer-Name") as HTMLElement;

function ShowInfo(data:Exempel[]) 
{
    console.log(data);
}

const beerURL ="https://api.punkapi.com/v2/beers/random";


async function getBeer() {
    try {
        const response = await fetch(beerURL);
        console.log(response);
        if (response.status === 200) {
            const data: Exempel[] = await response.json();
            ShowInfo(data);
            console.log(data);
            data.forEach(element => {
                console.log(element.name);
                let img = document.createElement("img");
                img.setAttribute("src", element.image_url);
                img_wrap.appendChild(img);
                BeerName.innerHTML = element.name;
            });
    
        } else {
            throw Error('Något gick fel, försök igen senare');
        }
    } catch (error) {
        console.log(error);
    }
    
}

getBeer(); 