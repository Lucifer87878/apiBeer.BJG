interface Exempel {
    age: number,
    breed: string,
    chipNumber: string,
    img: string,
    name: string,
    owner: Owner,
    present: boolean,
    sex: string
}

async function getBeer() {
    try {
        const response = await fetch('beerURL');
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