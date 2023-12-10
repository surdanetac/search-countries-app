
import { fetchCountry } from '@/app/lib/data'
import styleClasses from '@/app/ui/base.module.css'
import { Suspense } from 'react'
import DashboardSkeleton from '../../ui/skeletons'

export default async function DetailPage({ searchParams }: { searchParams?: { country?: string } }) {
  const query = searchParams?.country || ''
  const country = await fetchCountry(query)
  return (
    <Suspense fallback={<DashboardSkeleton/>}>
      <div className={`${styleClasses.background_detail} m-4 sm:h-[60rem] md:h-[70rem] lg:h-[50rem]`}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-36 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">País: {country.name}</h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {Object.keys(country).map((item, i) => (
              <>
                <div key={i} className="border-t pt-4 opacity-1" style={{ borderColor: 'black' }}>
                <dt className="font-medium text-black-900 capitalize">{item}</dt>
                <dd className="mt-2 text-sm text-black-500">{country[item]}</dd>
                </div>
              </>
            ))}
          </dl>
        </div>
        <div className="flex justify-center items-center w-full sm:h-[10rem] md:h-[14rem] overflow-hidden rounded-lg aspect-h-1 aspect-w-1">
          <img
            src={country.flag}
            alt={"kasdasj"}
            className="h-full sm:max-w-[20rem] object-cover object-center group-hover:opacity-75"/>
        </div>
      </div>
      </div>
    </Suspense>
  )
}
