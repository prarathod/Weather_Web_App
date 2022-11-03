import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "./api"
import "./search.css"
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    
    const Fetchlocation = async()=>{
        let url = "https://ipinfo.io/json?token=41f27fa180abe4";
        let response = await fetch(url);
        let data = await response.json(); 
        await navigator.geolocation.getCurrentPosition((position)=>{     
        setSearch({
                value: `${position.coords.latitude} ${position.coords.longitude}`,
                label: `${data.city}, ${data.country}`,
            });
        });
    }
    React.useEffect(()=>{    
        Fetchlocation();
    },[]);
    const loadOptions = (inputValue) => {
        
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, 
            geoApiOptions
            )
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <div className="search">
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
        </div>
        
    )
}
export default Search;