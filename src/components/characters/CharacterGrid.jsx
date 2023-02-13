import { useEffect } from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

// Main error is in this component. When you make a call to the api with an id param, it returns an object, NOT an array. Your version of this component will only work if the items prop is an array. (the .map() method only works on arrays), to fix this, you need to first check if the items prop is an array, if it is, render it how you are currently rendering it. If it is not an array, then render a single <CharacterItem ... />  component

// use the Array.isArray() method to check if items prop is an array or not

const CharacterGrid = ({ items, isLoading }) => {
  // items = Array.from(items) ---> DO NOT OVERWRITE PROPS. SUPPOSED TO BE READ ONLY

  // It is always a good practice to use the useEffect hook to see the value of props or state whenever they change in development. Delete this useEffect hook in production/when you are done with this component
  useEffect(() => {
    console.log(items) // notice how first this is an array, but when you enter something in search, it changes to an object
  }, [items])

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {Array.isArray(items) ? ( // checks if items is an array or not
        items.map(
          (
            item // rendered ONLY when items prop is an array
          ) => (
            <CharacterItem
              key={item.id}
              item={item}
            />
          )
        )
      ) : (
        <CharacterItem // rendered ONLY when items prop is NOT an array
          key={items.id}
          item={items}
        />
      )}
    </section>
  )
}

export default CharacterGrid
