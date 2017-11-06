import React from 'react'

const SearchResults = (props) => {
  return <ul>{props.characters.map((character)=><li><a href='show' onClick={props.handleClick}> {character.show.name}</a></li> )}</ul>
}

export default SearchResults
