import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Spinner } from 'reactstrap';

var QUOTES;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      randomIndex:0,
      loading:true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){

    let response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    let quotesData = await response.json();
    QUOTES = quotesData.quotes;
    this.setState({loading:false});


  }

  handleSubmit(event){
    var randomNum=Math.floor(Math.random()*QUOTES.length);

    while(this.state.randomIndex === randomNum){
        randomNum = Math.floor(Math.random()*QUOTES.length)
    };

    this.setState({
      randomIndex:randomNum
    });

  }

  render(){
    const style= {
      margin: '0 auto',
      width: '50%',
      padding: '10px',
      'background-color':'white',
      'border-radius':'10px'
    }
    console.log('render');
    if(this.state.loading)
      return (
        <div id='quote-box' style={style}> 
        <h5 id='loading'>Hang tight, Quote Master is fetching the quotes...</h5>
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="info" />
      </div>
      )
    return (
      <div id='quote-box' style={style}> 
        <h3 id='text'>"{QUOTES[this.state.randomIndex].quote}</h3>
        <p id='author'>{QUOTES[this.state.randomIndex].author}</p>
        <Button color = 'info' id='new-quote' onClick={this.handleSubmit}>Generate Another Quote</Button><br/>
        <a id='tweet-quote' href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"' + QUOTES[this.state.randomIndex].quote + '" ' + QUOTES[this.state.randomIndex].author)} target='_blank'>Tweet this</a>
      </div>
    );

  }

}

export default App;
