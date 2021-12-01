import logo from "./logo.svg";
import {
  Navbar,
  NavbarBrand
} from "reactstrap";
import Menu from './componentes/MenuComponent';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <NavbarBrand href="/">Restornate my-app</NavbarBrand>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
