import { useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import NavegationComponent from "../components/NavegationComponent";

function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
  const handleRezise = () => setWindowSize(window.innerWidth)  
  window.addEventListener('resize', handleRezise);
  return () => {
    window.removeEventListener('resize', handleRezise);
  };
}, []);  

const primaryColor = "whiteColor"
const margin = "customMargin"


  return (       
    <>
    {windowSize >= 579 ? (
    <NavegationComponent customClass={primaryColor} margin={margin}/>
    ) : (
      <NavegationComponent/>
    )}
      <Container fluid>
        <Row>
          <Col sm={windowSize >= 576 ? true : false}>       
            {windowSize >= 579 ? (                         
            HomeDesktop() 
            ) : (
            HomeMobile()
            )}       
          </Col> 
          {windowSize >= 579 ? (         
          <Col sm>
            <div className="line"/>
            <Image src="img/homeVetor.png" className="imageHome"/>
          </Col>
          ) : null}
        </Row>
      </Container>       
      </>   
  )

  function HomeDesktop() {
    return <section className="customScale">
      <article>
        <div className="flex flex-column pb-3">
          <h1 className="Bebas primaryColor"> Faça a <br /> diferença <span className="greenPrimary"> Hoje </span></h1>
          <h5 className="BigShoulders tertiaryColor"> Juntos Podemos Construir <br />um futuro mais <span className="greenPrimary"> Verde </span></h5>
        </div>
        <div>
          <a href="/about">
            <button className="GreenBtn whiteColor Bebas"><h4>Saiba Mais</h4> </button>
          </a>
        </div>
      </article>
    </section>;
  }

  function HomeMobile() {
    return <section>
    <article>
      <div className="flex flex-column pb-3">
        <h1 className="Bebas primaryColor"> Faça a <br /> diferença <span className="greenPrimary"> Hoje </span></h1>
        <h5 className="BigShoulders tertiaryColor"> Juntos Podemos Construir <br />um futuro mais <span className="greenPrimary"> Verde </span></h5>
      </div>
      <div>
        <a href="/about">
          <button className="GreenBtn whiteColor Bebas"><h4>Saiba Mais</h4> </button>
        </a>
      </div>
    </article>
  </section>;
  }
}

export default Home