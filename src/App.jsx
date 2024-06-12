import React from 'react';
import './App.css';
import {CardList, SearchBox} from './components';



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cats: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }))
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { cats, searchField } = this.state
    const filteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="app">
        <h1>Catzz Rolodex</h1>
        <SearchBox placeholder="search cats" handleChange={this.handleChange} />
        <CardList cats={filteredCats} />
      </div>
    )
  }
}

export default App
