
import {
  Navbar,
  NavbarBrand
} from "reactstrap";
import Menu from './componentes/MenuComponent';
import "./App.css";
import { DISHES } from './shared/dishes';
import { Component } from "react";
import DishDetail from "./componentes/DishdetailComponent";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES
    };
  };
  
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <NavbarBrand href="/">Restornate my-app</NavbarBrand>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
