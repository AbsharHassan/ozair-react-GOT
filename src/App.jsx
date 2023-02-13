import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import BackgroundImage from './components/ui/BackgroundImage'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      // Returns an array when no query param but returns an object when query param present
      // Also this should be in a try-catch block because it will throw an error if the id (query param) does not exist in their database. Discuss this with me in person.
      const result = await axios(
        `https://thronesapi.com/api/v2/Characters/${query}`
      )

      // commented out these to prevent the console from being flooded and becoming harder to debug
      // console.log(query)
      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid
          isLoading={isLoading}
          items={items}
        />
        <BackgroundImage />
      </div>
    </>
  )
}

export default App
