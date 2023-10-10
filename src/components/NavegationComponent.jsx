import { Container, Nav, Navbar } from "react-bootstrap"

function NavegationComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="Bebas user-select-none" href="/"><h2 className="primaryColor">Vida <span className="greenPrimary">Sustentável</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="aplicationNavbar"/>
        <Navbar.Collapse id="aplicationNavbar" className="flex flex-row justify-content-end ">
          <Nav>
            <Nav.Link href="/"><h3 className="Bebas primaryColor hoverColor">Inicio</h3></Nav.Link>
            <Nav.Link href="/about"><h3 className="Bebas primaryColor hoverColor">Sobre Nós</h3></Nav.Link>
            <Nav.Link href="/contact"><h3 className="Bebas primaryColor hoverColor">Contato</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavegationComponent