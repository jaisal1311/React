import React, { Component } from 'react';
import {DISHES} from '../shared/dishes'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import {COMMENTS} from '../shared/comments'
import Menu from './MenuComponent'
import Header from './Header'
import Footer from './Footer';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import Contact from './ContactUs'

class Main extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      dishes : DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home 
          dish = {this.state.dishes.filter((dish) => dish.featured)[1]}
          leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
          promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
         />
      )
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path = "/home" component = {HomePage} />
          <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes} />}></Route>
          <Route exact path = "/contact" component = {Contact}></Route>
          <Redirect to = "/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;