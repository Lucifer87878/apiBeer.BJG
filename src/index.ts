interface Exempel {
    id: number,
    name: string,
    tagline: string,
    image: string,
    description: string,
    hops: string,
    AlcoholByVolume: string,
    VolumeABV: number,
    Ingredients:string,
    FoodPairing:string,
    BrewersTips:string,


}

const beerURL ="https://api.punkapi.com/v2/beers/random";

async function getBeer() {
    try {
        const response = await fetch(beerURL);
        console.log(response);
        if (response.status === 200) {
            const data: Exempel[] = await response.json();
            console.log(data);
        } else {
            throw Error('Något gick fel, försök igen senare');
        }
    } catch (error) {
        console.log(error);
    }
}

getBeer(); 