import React, { Component } from 'react';
import SearchField from './SearchField'
import SearchResults from './SearchResults'
import ShowProfile from './ShowProfile'

class App extends Component {
  state = {
    characters: [],
    searchTerm: '',
    clickedShowDetails: [],
    clickedShowImageLink: 'https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif',
    clickedShowNetwork: [],
    clickedShowRating: []
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(character => this.setState({ characters: character }));
  }

  handleClick = (event) => {
    event.preventDefault()
    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${event.target.innerText}`)
      .then(response => response.json())
      .then(show => this.setState({
        clickedShowDetails: show,
        clickedShowNetwork: show.network,
        clickedShowRating: show.rating,
        clickedShowImageLink: show.image === null ? "https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif" : show.image.medium
      }));
  }

  render() {
    return (
      <div className="App">
        <h1>Showpedia</h1>
        <SearchField handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <SearchResults characters={this.state.characters} handleClick={this.handleClick}/>
        <ShowProfile showInfo={this.state.clickedShowDetails} showImg={this.state.clickedShowImageLink} networkInfo={this.state.clickedShowNetwork} showRtg={this.state.clickedShowRating}/>
      </div>
    );
  }
}

export default App;
