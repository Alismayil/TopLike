import React, {  createContext, useState } from 'react'

export const SearchContext=createContext()

function SearchProvider({children}) {
  const [search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.value)
  }

  const data={
    handleSearch,
    search,
    setSearch
  }

  return (
    <SearchContext.Provider value={data}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider