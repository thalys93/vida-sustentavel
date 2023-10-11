import { Container, Nav, Navbar } from "react-bootstrap"
import { PropTypes } from 'prop-types';

function NavegationComponent(props) {    

  NavegationComponent.propTypes = {
    customClass: PropTypes.string,
    margin: PropTypes.string
  };

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className={`Bebas ${props.margin} user-select-none`} href="/"><h2 className="Bebas primaryColor">Vida <span className="greenPrimary">Sustentável</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="aplicationNavbar"/>
        <Navbar.Collapse id="aplicationNavbar" className="flex flex-row justify-content-end ">
          <Nav className="gap-5">
            <Nav.Link href="/"><h3 className={`Bebas ${props.customClass} hoverColor`}>Inicio</h3></Nav.Link>
            <Nav.Link href="/about"><h3 className={`Bebas ${props.customClass} hoverColor`}>Sobre Nós</h3></Nav.Link>
            <Nav.Link href="/contact"><h3 className={`Bebas ${props.customClass} hoverColor`}>Contato</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

export default NavegationComponent