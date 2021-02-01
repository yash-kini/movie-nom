import React from 'react';
import './App.css';
import { Grid} from 'semantic-ui-react'
import Search from './component/Search'
import Movie from './component/Movie'
import Noms from './component/Noms'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      movie: {},
      noms: [],
    }
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.nominate = this.nominate.bind(this);
    this.validNomination = this.validNomination.bind(this);
  }

  getMovie(){
    fetch(`https://www.omdbapi.com/?t=${this.state.searchText}&apikey=${process.env.REACT_APP_OMDB_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({movie: json})
      });
  }

  handleText(e) {
    this.setState({searchText: e.target.value});
    console.log(e.target.value);
  }

  handleSubmit() {
    console.log("submit");
    this.getMovie();
  }

  nominate() {
    if (this.validNomination()){
      let nomCopy = this.state.noms.slice();
      nomCopy.push(this.state.movie);
      this.setState({noms: nomCopy});
      console.log({"nominations":this.state.noms});
    }

  }

  validNomination(){
    let nomIDs = this.state.noms.map(m => m.imdbID);
    let movieID = this.state.movie.imdbID;
    console.log("validNom", nomIDs, movieID, movieID in nomIDs);
    if (nomIDs.includes(movieID)){
      return false;
    }
    if (this.state.noms.length >= 5){
      return false;
    } 
    return true;
  }

  render() {
    return (
      <div className="App">
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Search 
                  handleText={this.handleText}
                  handleSubmit={this.handleSubmit}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
              <Grid.Column width={12}>
                <Movie
                  movie={this.state.movie} 
                  nominate={this.nominate}
                  canNominate={this.validNomination()}
                />
              </Grid.Column>
              <Grid.Column >
                <Noms
                  movies={this.state.noms} 
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default App;
