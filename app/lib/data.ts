import { Country } from './definitions';
import { formatCountries, formatCountry } from './utils';

export async function fetchCountries(): Promise<Country[]> {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,languages,area,flag,maps,population,continents')
    const data = await response.json()
    const countries: Country[] = formatCountries(data)
    return countries
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch countries data.');
  }
}

export async function fetchCountry(query: string | null): Promise<Country> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${query}`)
    const data = await response.json()
    const country: Country = formatCountry(data[0])
    return country
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch country data.');
  }
}