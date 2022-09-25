// Use the rest country API URL 'https://restcountries.com/v2/all' and display all the country flags in the console

const fetchCountryData = async () => {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()
    data.forEach((item) => {
        //@ fetching flag url on console
        console.log(`
        Country Name : ${item.name}
        Country flag : ${item.flag}
        `)

        // @ printing flags on page
        // var img = document.createElement('img');
        // img.src = `${item.flag}`;
        // document.getElementById('countryFlag').appendChild(img);

    })
}

const fetchCountryData2 = async () => {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()
    data.forEach((item) => {

        console.log(`
        Country Name : ${item.name}
        Country region : ${item.region}
        Country subregion : ${item.subregion}
        Country population : ${item.population}
        `)

    })
}
fetchCountryData();

fetchCountryData2();