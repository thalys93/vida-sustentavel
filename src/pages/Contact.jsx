import { Col, Container, Figure, Row } from "react-bootstrap" 
import {BsLinkedin, BsInstagram, BsGithub, BsGlobe} from "react-icons/bs"
import NavegationComponent from "../components/NavegationComponent"


function Contact() {

  const primaryColor = "primaryColor"

  return (
    <>
    <NavegationComponent customClass={primaryColor}/>
    <Container fluid>
      <Row>
        <Col sm>
          <section>
            <article>
              <div>
                <h3> Aviso Importante: </h3>
              </div>
              <p>
              Esta Solução é uma Jornada de Estudo e Criatividade
O Vida Sustentável é mais do que apenas um site. É uma jornada de descoberta, aprendizado e inovação em design de interface e experiência do usuário (UI/UX). Fomos inspirados a criar esta plataforma como um projeto de paixão para explorar como a   sustentabilidade pode ser comunicada de maneira eficaz.
              </p>
            </article>
          </section>
        </Col>

        <Col sm>
          <section>
            <article>
              <div>
                <h3> Contato </h3>
              </div>
              <div>
                {ContactIcons()}
              </div>
              <p>
              Se você está buscando soluções de design de 
              <span>UI/UX</span> que reflitam a essência da sustentabilidade e se adaptem à sua marca e visão de negócios, você está no lugar certo. Embora este projeto tenha sido desenvolvido para <span>fins de estudo,</span> estamos ansiosos para colaborar em projetos sob medida para <span>empresas</span> que compartilham nossa paixão pela sustentabilidade.
              </p>
            </article>
          </section>
        </Col>
      </Row>
    </Container>
    </>
  )

  function ContactIcons() {
    return <Row>
      <Col sm>
        <Figure>
          <BsLinkedin/>
          <Figure.Caption> Linkedin </Figure.Caption>
        </Figure>
        <Figure>
          <BsInstagram/> 
          <Figure.Caption> Instagram </Figure.Caption>
        </Figure>
      </Col>
      <Col sm>
        <Figure>
          <BsGithub/>
          <Figure.Caption> Github </Figure.Caption>
        </Figure>
        <Figure>
          <BsGlobe/>
          <Figure.Caption> Portifólio </Figure.Caption>
        </Figure>
      </Col>
    </Row>    
  }
}

export default Contact