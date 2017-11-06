import React from 'react'

const SearchField = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <input type='text' onChange={props.handleChange}/>
      <input type='submit' />
    </form>
}

export default SearchField
