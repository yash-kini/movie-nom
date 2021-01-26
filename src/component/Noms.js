import React from 'react';
import { Image, Button } from 'semantic-ui-react'

function formatMovie(movie) {
  return ( 
  <div id="nom-container">
    <Image 
      id='nom-poster' 
      src={`https://img.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_OMDB_KEY}`} 
    />
    <div id='nom-details'>
      <p id='nom-title'>{movie.Title}</p>
      <Button 
        circular 
        color="red" 
        icon="times"
      />
    </div> 

  </div>
  )
}

class Noms extends React.Component {
  render(){
    const movies = this.props.movies;
    const movies_format = movies.map(m => formatMovie(m));
    return (
      <div>
        {movies_format}
      </div>
    );
  }

}

export default Noms;
