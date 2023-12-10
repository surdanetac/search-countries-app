'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export default function Search({ placeholder }: { placeholder: string }) {
const pathname = usePathname()
const [search, setSearch] = useState('')
const searchParams = useSearchParams()
const { replace } = useRouter()

const handleSearch = (event: any) => {
  setSearch(event.target.value)
}

function handleClick() {
  const params = new URLSearchParams(searchParams)
  if (search) {
    params.set('country', search)
  } else {
    params.delete('country')
  }
  replace(`${pathname}/detail?${params.toString()}`)
}

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" onClick={handleClick}/>
    </div>
  );
}
