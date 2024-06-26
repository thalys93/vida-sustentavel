import { Container, Nav, Navbar } from "react-bootstrap"
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { DarkModeContext } from "../utils/DarkModeContext";
import DarkModeComponent from "./DarkModeComponent";

function NavegationComponent(props) {    

  NavegationComponent.propTypes = {
    customClass: PropTypes.string,    
  };

  const getLinkClass = (path) => {
    return window.location.pathname === path ? 'greenPrimary' : '';
  };

  const {isDarkMode } = useContext(DarkModeContext)

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid>
        <Navbar.Brand className="Bebas m-lg-2 user-select-none" href="/"><h2 className={isDarkMode? 'Bebas whiteColor' : "Bebas primaryColor"}>Vida <span className="greenPrimary">Sustentável</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="aplicationNavbar"/>
        <Navbar.Collapse id="aplicationNavbar" className="flex flex-row justify-content-end ">
          <Nav className="gap-lg-4 gap-sm-0 pt-lg-4 pe-lg-4">
            <Nav.Link href="/"><h3 className={isDarkMode? `Bebas whiteColor ${getLinkClass('/')} hoverColor` : `Bebas ${props.customClass} ${getLinkClass('/')} hoverColor`}>Inicio</h3></Nav.Link>
            <Nav.Link href="/about"><h3 className={isDarkMode? `Bebas whiteColor ${getLinkClass('/about')} hoverColor` : `Bebas ${props.customClass} ${getLinkClass('/about')} hoverColor`}>Sobre Nós</h3></Nav.Link>
            <Nav.Link href="/contact"><h3 className={isDarkMode? `Bebas whiteColor ${getLinkClass('/contact')} hoverColor` : `Bebas ${props.customClass} ${getLinkClass('/contact')} hoverColor`}>Contato</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <DarkModeComponent/>
    </Navbar>
  )


}

export default NavegationComponent