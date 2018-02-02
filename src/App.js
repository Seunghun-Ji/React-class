import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './component/card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies : []
    };
  }

  _getMovieList = (_result) => {
    console.log("Set State");
    console.log(_result);
    this.setState({ //stable 버전부터 무조건 setState 함수를 사용하도록 정해짐
      movies : _result.data.movies
    });
  }

  _renderMovieList = () => {
    let result = this.state.movies.map( (_movie, _index)  => {
      console.log(_movie, _index);
      return <Card key={_index} contentTitle = {_movie.title} contentImage = {_movie.medium_cover_image} />
    })
    return result;
  }

  componentDidMount() {
    fetch ("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then( _response => _response.json() )
    .then( _movies => this._getMovieList(_movies))
    .catch( _err => console.log( _err) )
    console.log("call api")
  }

  componentWillUpdate () {
    console.log("componentWillUpdate");
    console.log(this.state.movies);
  }

  componentDidUpdate () {
    console.log("componentDidUpdate");
    console.log(this.state.movies);
  }

  render() {
    return (
      <div className="App">
      {
        this.state.movies.length == 0 ? "No data" : this._renderMovieList()  
      }
      </div>
        
        /* 
        // 애로우 (=>)는 아래의 function과 같은 기능
        function (_movie, _index) {}
        */

        /*
        //div 안의 default 내용
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */
      
    );
  }
}

export default App;
