import React, { Component } from 'react';
import {DISHES} from '../shared/dishes'
import Menu from './MenuComponent'
import DishDetails from './DishDetails'
import Header from './Header'
import Footer from './Footer';

class Main extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      dishes : DISHES,
      selectedDish: null,
    }
  }

  onDishSelect(dishid) {
    this.setState({ selectedDish: dishid});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu dishes = {this.state.dishes} onClick = {(dishid) => this.onDishSelect(dishid)}/>
        <DishDetails dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}


export default Main;
