import { fetchCountries } from "../lib/data"
import { CardWrapper } from "../ui/dashboard/cards"
import styleClasses from '@/app/ui/base.module.css'
import Search from "../ui/search"

export default async function dashboard() {

  const countries = await fetchCountries()
  return (
        <div className="p-4">
          <div className={`${styleClasses.background_detail} w-full h-[5rem] inline-block text-center align-middle text-3xl`}> Global Insight Enterprises </div>
          <div className="pt-1">
            <Search placeholder="Busca tu país..."/>
          </div>
          <CardWrapper countries={countries}/> 
        </div>
    )
}