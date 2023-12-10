import { Country } from './definitions';

export const formatCountries = ( countries: Array<Country>) => {
  return countries.map((country:any) => {
    return {
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      languages: country.languages.eng,
      continents: country.continents[0],
    }
  }).sort((a, b) => a.name.localeCompare(b.name))
}

export const formatCountry = ( country:any ) => {
    return {
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital[0],
      region: country.region,
      subregion: country.subregion,
      languages: Object.keys(country.languages).map((item) => country.languages[item]),
      continents: country.continents[0],
    } 
}
