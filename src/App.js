import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import CardList from './components/CardList';
import Search from './components/Search';

export class App extends Component {
  constructor   (props) {
    super(props)
  
    this.state = {
      monsters: [],
      search: ''
    }
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({monsters: data})
    // })
    // .catch(err => console.log(err.message))
    axios.get("https://jsonplaceholder.typicode.com/users")
     .then(response => {
      this.setState({monsters: response.data})
    })
    .catch(err => console.log(err.message))
  }
  handleChange = (e) => {
    this.setState({search: e.target.value})
  }
  render() {
    
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder={'seach monsters'} handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
