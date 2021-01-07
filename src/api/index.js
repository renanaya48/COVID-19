// import axios from 'axios';

// const url = 'https://covid19.mathdro.id/api';

// export const fetchData = async () => {
//     try {
//         const response = await axios.get(url);

//         return response;

//     } catch (error) {

//     }

// }


import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data} = await axios.get(url);
        console.log("url");
        console.log(data);

        // const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }

        return modifiedData;
        
        // return { confirmed, recovered, deaths, lastUpdate};

    } catch (error) {
        console.log(error);
    }

}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: {countries} } = await axios.get(`${url}/countries`);
        console.log("countries");
        console.log({countries});

        console.log(countries.map((country) => country.name));
        return countries.map((country) => country.name);

        // const modifiedData = countries.map((countryData) => ({
        //     confirmed: countryData.confirmed.value,
        //     deaths: countryData.deaths.value,
        //     recovered: countryData.recovered.value,
        //     lastUpdate: countryData.lastUpdate,

        // }));
        // console.log("modi");
        // console.log({modifiedData});
        // return modifiedData;

    }catch(error){
        console.log(error);
    }
}

// fetchCountryData();

