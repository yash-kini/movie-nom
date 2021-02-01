import React from 'react';
import { Image, Button, Icon } from 'semantic-ui-react';

class Movie extends React.Component {

  render(){
    if(this.props.movie){
      const movie = this.props.movie;
      return (
        <div className="movie">
          <div className="movie-top">
            <Image id='poster' src= {`https://img.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_OMDB_KEY}`} />
            <div className="movie-details"> 
              <h1 id="title">{movie.Title}</h1>
              <Button 
                icon='heart' 
                labelPosition='left'
                content='Nominate'
                color='orange'
                onClick={this.props.nominate}
                disabled={!this.props.canNominate}
              />
              <p id="plot">{movie.Plot}</p>
              <p>Director: {movie.Director}</p>
              <p>Cast: {movie.Actors}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Movie;
