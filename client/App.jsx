import React from "react";
import GroceryItem from "./GroceryItem.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      GroceryItem: "",
    };
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    axios.post('/posty', {
      GroceryItem: this.state.GroceryItem
    })
    .then(() => {
      axios.get('/groceries')
        .then(groceries => {
          this.setState({
            gList: groceries.data
          })
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
  }
  
    
  updateItem(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      GroceryItem: event.target.value
    });
  }
    
  componentDidMount() {
    axios.get('/groceries')
      .then(groceries => {
        this.setState({
          gList: groceries.data
        })
      })
      .catch(err => console.error(err))
  }
  
 
  
  render() {
    return (
      <div>
        <input placeholder="Add Item" onChange={this.updateItem}/>
        <button onClick={this.addItem}>Submit</button>
        <ul>
          <GroceryItem gList={this.state.gList}/>
        </ul>
      </div>
    );
  }
}
