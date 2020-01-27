import React from 'react';
import logo from './logo.svg';
import './App.css';

const QUOTES = [{quote:'I"ll be back!',author:'Terminator'},
                {quote:'Do NOT use my music to sell damn choon paan!!',author:'Beethovan'},
                {quote:'My name is Khan and I am not a terrorist',author:'Khan-not a terrorist'},
                {quote:'To be or not to be',author:'William Shakespear'},
                {quote:'I have no idea what I am doing with my life',author:'Me'}];


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      randomIndex:Math.floor(Math.random()*QUOTES.length)
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
    }
    return (
      <div id='quote-box' style={style}> 
        <h3 id='text'>{QUOTES[this.state.randomIndex].quote}</h3>
        <p id='author'>{QUOTES[this.state.randomIndex].author}</p>
        <button id='new-quote' onClick={this.handleSubmit}>Generate Another Quote</button><br/>
        <a id='tweet-quote' href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"' + QUOTES[this.state.randomIndex].quote + '" ' + QUOTES[this.state.randomIndex].author)} target='_blank'>Tweet this</a>
      </div>
    );

  }

}

export default App;
