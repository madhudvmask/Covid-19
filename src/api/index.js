import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// export card data
export const fetchData = async (country)=>{

    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try{
        //one way
        //const { data } = await axios.get(url);


        //const { data : {confirmend, recovered, deaths, lastUpdate} } = await axios.get(url);
        
        //one way of creating object 
        // const modifiedData ={
        //     confirmend: data.confirmend,
        //     deaths: data.deaths,
        //     recovered: data.recovered,
        //     lastUpdate: data.lastUpdate,
        // }
        


        //two way
        // const modifiedData = {
        //     confirmend:confirmend,
        //     deaths: deaths,
        //     recovered: recovered,
        //     lastUpdate: lastUpdate,
        // }

        //return modifiedData;


        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch (error){
        console.log(error);
    }
}


// export daily data

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}



//export country

export const fetchCountries = async () =>{
    try{
       // const response = await axios.get(`${url}/countries`);
        //console.log(response);
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch(error){
        console.log(error)
    }
}