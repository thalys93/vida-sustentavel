import { Col, Container, Figure, Row, Stack } from "react-bootstrap"
import { BsLinkedin, BsInstagram, BsGithub, BsGlobe } from "react-icons/bs"
import NavegationComponent from "../components/NavegationComponent"
import FooterComponent from "../components/FooterComponent"
import { useEffect, useState } from "react"


function Contact() {

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleRezise = () => setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleRezise);
    return () => {
      window.removeEventListener('resize', handleRezise);
    };
  }, []);


  return (
    <>
      <NavegationComponent />
      <Container fluid className={windowSize >= 768 ? "spacingText ContactWidth" : "spacingText"}>
        <Row>
          <Col sm>
            <section>
              <article>
                <div className='lightPopup Bebas text-center'>
                  <h3 className="p-2"> Aviso Importante: </h3>
                </div>
                <p className="p-2 lightPopup BigShoulders">
                  Esta Solução é uma Jornada de Estudo e Criatividade
                  O Vida Sustentável é mais do que apenas um site. É uma jornada de descoberta, aprendizado e inovação em design de interface e experiência do usuário (UI/UX). Fomos inspirados a criar esta plataforma como um projeto de paixão para explorar como a   sustentabilidade pode ser comunicada de maneira eficaz.
                </p>
              </article>
            </section>
          </Col>

          <Col sm>
            <section>
              <article>
                <div className='lightPopup Bebas text-center'>
                  <h3> Contato </h3>
                </div>
                <div className="lightPopup m-3 text-center">
                  {ContactIcons()}
                </div>
                <p className="p-2 lightPopup BigShoulders">
                  Se você está buscando soluções de design de
                  <span className="greenSecondary fw-bold"> UI/UX</span> que reflitam a essência da sustentabilidade e se adaptem à sua marca e visão de negócios, você está no lugar certo. Embora este projeto tenha sido desenvolvido para <span className="greenSecondary fw-bold">fins de estudo,</span> estamos ansiosos para colaborar em projetos sob medida para <span className="greenSecondary fw-bold">empresas</span> que compartilham nossa paixão pela sustentabilidade.
                </p>
              </article>
            </section>
          </Col>
        </Row>
      </Container>
      <FooterComponent/>
    </>
  )

  function ContactIcons() {
    return <Stack direction="horizontal" gap={4} className="p-3 justify-content-center">
      <Figure className="figureHover">
        <a href="https://www.linkedin.com/in/luis-rodrigues202/" target="_blank" rel="noopener noreferrer" className="text-decoration-none primaryColor">
          <BsLinkedin className="iconSize" />
          <Figure.Caption> Linkedin </Figure.Caption>
        </a>
      </Figure>


      <Figure className="figureHover">
        <a href="https://www.instagram.com/luiss_xavierr/" target="_blank"  rel="noopener noreferrer"className="text-decoration-none primaryColor">
          <BsInstagram className="iconSize" />
          <Figure.Caption> Instagram </Figure.Caption>
        </a>
      </Figure>


      <Figure className="figureHover">
        <a href="https://github.com/thalys93" target="_blank" rel="noopener noreferrer" className="text-decoration-none primaryColor">
          <BsGithub className="iconSize" />
          <Figure.Caption> Github </Figure.Caption>
        </a>
      </Figure>

      <Figure className="figureHover">
        <a href="https://portifolio-luis-thalys.web.app/" target="_blank" rel="noopener noreferrer"className="text-decoration-none primaryColor">
          <BsGlobe className="iconSize" />
          <Figure.Caption> Portifólio </Figure.Caption>
        </a>
      </Figure>
    </Stack>
  }
}

export default Contact