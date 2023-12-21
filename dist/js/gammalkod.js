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
