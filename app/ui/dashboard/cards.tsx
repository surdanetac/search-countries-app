import { montserrat } from '@/app/ui/fonts';
import { Country } from '@/app/lib/definitions';
import Link from 'next/link';

export function CardWrapper({ countries }: { countries: Array<Country> }) {
  return (
    // <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6'>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-4">
      {countries.map((country: Country, index) => {
      return (
        <Card key={index} countryName={country.name} flag={country.flag}/> 
        )
      })}
    </div>
  );
}

export function Card(
  {
  countryName,
  flag,
}: {
  countryName: string;
  flag: string;
}
) {
  return (
    // <div className={`${montserrat.className} flex justify-center items-center bg-center bg-no-repeat sm:max-w-[20rem] h-[10rem] rounded overflow-hidden shadow-lg rounded-2xl`} style={{ backgroundImage: `url(${flag})`}}>
    //   <Link className="font-bold bg-white opacity-80 shadow-lg rounded-2xl p-4 active:bg-gray-400 cursor-pointer" href="/dashboard/detail">{countryName}</Link>
    // </div>
    <div className={`${montserrat.className} flex justify-center items-center sm:max-w-[20rem] h-[10rem] bg-no-repeat bg-cover bg-center overflow-hidden rounded-lg object-cover object-center group-hover:opacity-75 aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7`} style={{ backgroundImage: `url(${flag})`}}>
      <Link className="font-bold bg-white opacity-80 shadow-lg rounded-2xl p-4 active:bg-gray-400 cursor-pointer" href={`/dashboard/detail?country=${countryName}`}>{countryName}</Link>
    </div>
    
  );
}