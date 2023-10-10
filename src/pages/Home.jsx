import { useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"

function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
  const handleRezise = () => setWindowSize(window.innerWidth)  
  window.addEventListener('resize', handleRezise);
  return () => {
    window.removeEventListener('resize', handleRezise);
  };
}, []);


  return (        
      <Container fluid>
        <Row>
          <Col sm={windowSize >= 576 ? true : false}>
            <section>
              <article>
                <div>
                  <h1> Faça a diferença <span> Hoje </span></h1>
                </div>
                <span> Juntos Podemos Construir um futuro mais <span> Verde </span></span>
                <div>
                  <button> Saiba Mais </button>
                </div>
              </article>
            </section>
          </Col> 
          {windowSize >= 579 ? (         
          <Col sm>
            <Image src="img/homeVetor.png"/>
          </Col>
          ) : null}
        </Row>
      </Container>         
  )
}

export default Home